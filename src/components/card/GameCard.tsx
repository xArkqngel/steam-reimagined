import { useLazyQuery, gql } from "@apollo/client";

interface GameCardProps {
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

function GameCard({ gameID }: GameCardProps) {
  return (
    <div className="card">
      <h2>Game Title</h2>
      <p>{gameID}</p>
    </div>
  );
}

export default GameCard;
