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

function GameCard({ gameID }: GameCardProps) {
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
    return <div>loading...</div>;
  }
  if (error) return <div>Error fetching game data.</div>;

  if (!game) return null;

  return (
    <div className="flex flex-col gap-2 p-2 bg-[color:var(--bg-main)] rounded-sm">
      <Image
        src={game.header_image}
        alt={game.name}
        width={379}
        height={197}
        className="rounded-xs cursor-pointer"
        onClick={() => router.push(`/game/${gameID}`)}
      />
      <h3
        className="text-lg cursor-pointer"
        onClick={() => router.push(`/game/${gameID}`)}
      >
        {game.name}
      </h3>
      <div className="flex flex-row justify-between">
        <OSTag os="windows" />
        <div className="flex flex-row gap-2 items-center">
          <span className="text-xs text-[color:var(--text-dim)]">
            {getRandomDateMessage()}
          </span>
          <PriceTag price={game.price} discount={game.discount} />
          <Button
            icon={<IoIosHeartEmpty size={20} />}
            textColor="var(--text-main)"
            onToggle={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default GameCard;
