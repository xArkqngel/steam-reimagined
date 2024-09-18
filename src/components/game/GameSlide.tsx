"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLazyQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { GameQueryType } from "@/types/query";

interface GameSlideProps {
  gameID: string;
}

const GAME = gql`
  query Game($gameId: ID!) {
    game(id: $gameId) {
      id
      name
      header_image
      screenshots
      short_description
      price
      discount
      genres
      tags {
        name
      }
    }
  }
`;

function GameSlide({ gameID }: GameSlideProps) {
  const router = useRouter();
  const [game, setGame] = useState<GameQueryType>();

  const [getGame, { loading, error }] = useLazyQuery(GAME, {
    variables: { gameId: gameID },
    onCompleted: (data) => {
      setGame(data.game);
    },
  });

  useEffect(() => {
    getGame();
  }, [gameID, getGame]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error fetching game data.</div>;

  return (
    <article
      className="cursor-pointer"
      onClick={() => router.push(`/game/${gameID}`)}
    >
      {game && (
        <div className="flex flex-row gap-4">
          <div className="w-2/3">
            <Image
              src={game.header_image}
              alt={game.name}
              width={460}
              height={215}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <h3 className="text-xl font-bold">{game.name}</h3>
            <p className="text-sm">{game.short_description}</p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {game.screenshots
                .slice(0, 4)
                .map((screenshot: string, index: number) => (
                  <Image
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    width={230}
                    height={110}
                  />
                ))}
            </div>

            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {game.tags
                .slice(0, 4)
                .map((tag: { name: string }, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white px-2 py-1 text-sm"
                  >
                    {tag.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default GameSlide;
