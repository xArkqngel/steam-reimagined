"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLazyQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { GameSlideType } from "@/types/query";
import GameTag from "../tag/GameTag";
import OSTag from "../tag/OSTag";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "../button/Button";
import PriceTag from "../tag/PriceTag";

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
      mac
      windows
      linux
      genres
      tags {
        name
      }
    }
  }
`;

function GameSlide({ gameID }: GameSlideProps) {
  const router = useRouter();
  const [game, setGame] = useState<GameSlideType | null>(null); // Initially null

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
      <article>
        <div className="flex flex-row p-2 bg-[color:var(--bg-main)] rounded-sm">
          <div className="w-[735px]">
            <div className="bg-gray-300 animate-pulse w-[700px] h-[401px] rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 w-[367px]">
            <div className="bg-gray-300 h-[28px] w-[367px] animate-pulse rounded-sm" />
            <div className="bg-gray-300 h-[60px] w-[367px] animate-pulse rounded-sm" />
            <div className="bg-gray-300 h-[207px] w-[367px] animate-pulse rounded-sm" />
            <div className="bg-gray-300 h-[32px] w-[367px] animate-pulse rounded-sm" />
            <div className="bg-gray-300 h-[34px] w-[367px] animate-pulse rounded-sm" />
          </div>
        </div>
      </article>
    );
  }
  if (error) return <div>Error fetching game data.</div>;

  if (!game) return null;

  return (
    <article>
      <div className="flex flex-row p-2 bg-[color:var(--bg-main)] rounded-sm">
        <div className="cursor-pointer w-2/3">
          <Image
            src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg`}
            alt={game.name}
            width={700}
            height={460}
            onClick={() => router.push(`/game/${gameID}`)}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <h3
            className="text-lg truncate font-bold cursor-pointer"
            onClick={() => router.push(`/game/${gameID}`)}
          >
            {game.name}
          </h3>
          <p className="text-sm line-clamp-3">{game.short_description}</p>
          <div
            className="grid grid-cols-2 gap-1 cursor-pointer"
            onClick={() => router.push(`/game/${gameID}`)}
          >
            {game.screenshots
              .slice(0, 4)
              .map((screenshot: string, index: number) => (
                <Image
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  width={180}
                  height={0}
                />
              ))}
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row flex-wrap gap-1">
              {game.tags
                .slice(0, 3)
                .map((tag: { name: string }, index: number) => (
                  <GameTag key={index} tag={tag.name} />
                ))}
            </div>
            <div className="flex flex-row gap-1">
              {game.mac && <OSTag os="mac" />}
              {game.windows && <OSTag os="windows" />}
              {game.linux && <OSTag os="linux" />}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Button
              text="Wishlist"
              icon={<IoIosHeartEmpty size={20} />}
              textColor="var(--text-main)"
              onToggle={() => {}}
            />
            <div className="flex fle-row gap-2 items-center">
              <PriceTag price={game.price} discount={game.discount} />
              {game.price > 0 && (
                <Button
                  text="Buy Now"
                  textColor="var(--text-main)"
                  bgColor="var(--color-secondary)"
                  onToggle={() => {}}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default GameSlide;
