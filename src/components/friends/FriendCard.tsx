import { Friend } from "@/consts/users";
import FriendPP from "./FriendPP";

function FriendCard(friend: Friend) {
  const color =
    friend.friendStatus === "online"
      ? "var(--color-primary)"
      : friend.friendStatus === "away"
      ? "var(--accent-yellow)"
      : "var(--text-dim)";

  return (
    <div className="flex flex-row gap-2 items-center">
      <FriendPP friend={friend} borderColor={color} />
      <div className="flex flex-col" style={{ color }}>
        <p className="text-sm">{friend.name}</p>
        <p className="text-[10px]">{friend.text}</p>
      </div>
    </div>
  );
}

export default FriendCard;
