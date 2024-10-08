"use client";
import { GameCardType } from "@/types/query";
import { useLazyQuery, gql } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import OSTag from "../tag/OSTag";
import { getRandomDateMessage } from "@/utils/useGetRandomDateMessage";
import PriceTag from "../tag/PriceTag";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "../button/Button";
import React from "react";

interface GameCardProps {
  gameID: string;
}

const GAME = gql`
  query Game($gameId: ID!) {
    game(id: $gameId) {
      id
      name
      header_image
      price
      discount
    }
  }
`;

function HorizontalGameCard({ gameID }: GameCardProps) {
  const router = useRouter();
  const [game, setGame] = useState<GameCardType | null>(null);

  const [getGame, { loading, error }] = useLazyQuery(GAME, {
    variables: { gameId: gameID },
    onCompleted: (data) => {
      setGame(data.game);
    },
  });

  useEffect(() => {
    getGame();
  }, [gameID, getGame]);

  if (loading) {
    return (
      <article className="flex flex-row gap-2 p-2 bg-[color:var(--bg-main)] rounded-sm">
        <div className="bg-gray-300 animate-pulse w-[341px] h-[159px] rounded-sm"></div>
        <div className="bg-gray-300 animate-pulse w-[341px] h-[28px] rounded-sm"></div>
        <div className="flex flex-col justify-between">
          <div className="bg-gray-300 animate-pulse w-[31px] h-[34px] rounded-sm"></div>
          <div className="bg-gray-300 animate-pulse w-[218px] h-[34px] rounded-sm"></div>
        </div>
      </article>
    );
  }
  if (error) return <article>Error fetching game data.</article>;

  if (!game) return null;

  return (
    <article
      className="flex flex-row gap-2 p-2 bg-[color:var(--bg-main)] rounded-sm w-full"
      key={game.id}
    >
      <Image
        src={game.header_image}
        alt={game.name}
        width={230}
        height={101}
        className="rounded-xs cursor-pointer"
        onClick={() => router.push(`/game/${gameID}`)}
      />
      <div className="flex flex-col justify-between w-[310px]">
        <h3
          className="text-lg cursor-pointer truncate"
          onClick={() => router.push(`/game/${gameID}`)}
        >
          {game.name}
        </h3>
        <div className="flex flex-row justify-between items-center">
          <OSTag os="windows" />
          <div className="flex flex-rcw gap-2 items-center">
            {game.price === 0 ? (
              <>
                <span className="text-xs text-[color:var(--text-dim)] pr-2">
                  Free to Play
                </span>
                <Button
                  text="Play Now"
                  textColor="var(--bg-main)"
                  bgColor="var(--accent-green)"
                  onToggle={() => router.push}
                />
              </>
            ) : (
              <>
                <span className="text-xs text-[color:var(--text-dim)]">
                  {game.discount === "0" ? "" : getRandomDateMessage()}
                </span>
                <PriceTag price={game.price} discount={game.discount} />
                <Button
                  icon={<IoIosHeartEmpty size={20} />}
                  textColor="var(--text-main)"
                  onToggle={() => {}}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default HorizontalGameCard;
