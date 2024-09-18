"use client";
import React, { useState, useCallback } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import debounce from "lodash/debounce";
import { gameSearchType } from "@/types/search";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const SEARCH_GAMES = gql`
  query SearchGames($query: String!, $maxResults: Int) {
    searchGames(query: $query, maxResults: $maxResults) {
      id
      name
      price
      capsule_image
    }
  }
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<gameSearchType[]>([]);

  const [searchGames] = useLazyQuery(SEARCH_GAMES, {
    onCompleted: (data) => {
      setResults(data.searchGames);
    },
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query) {
        searchGames({ variables: { query, maxResults: 5 } });
      } else {
        setResults([]);
      }
    }, 500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative inline-block">
      <div className="flex flex-row w-[400px] items-center text-[color:var(--color-secondary)] bg-[color:var(--bg-main-20)]">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
          className="flex-1 p-2 border-none bg-transparent outline-none focus:outline-none placeholder-[color:var(--color-secondary)] text-[color:var(--text-main)]"
        />
        <IoIosSearch size={25} />
      </div>

      <div className="absolute rounded-sm z-10 w-[400px] text-[color:var(--text-main)] bg-[color:var(--bg-highlight)] right-0 opacity-100 transition-opacity duration-200">
        {results.map((game: gameSearchType) => (
          <Link key={game.id} href={`/game/${game.id}`}>
            <div className="flex flex-row gap-2 p-1 cursor-pointer hover:bg-[color:var(--bg-hover)]">
              <Image
                width={120}
                height={45}
                src={game.capsule_image}
                alt={game.name}
              />
              <div className="flex flex-col">
                <p className="truncate w-60">{game.name}</p>
                <p>{game.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
