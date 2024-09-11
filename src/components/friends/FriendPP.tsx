import { Friend } from "@/consts/users";
import Image from "next/image";

interface FriendPPProps {
  friend: Friend;
  size?: number;
  borderColor?: string;
}

function FriendPP({ friend, size, borderColor }: FriendPPProps) {
  return (
    <>
      <Image
        src={friend.profilePicture}
        alt={friend.name}
        width={size || 40}
        height={size || 40}
        className="border-2 rounded-sm"
        style={{ borderColor }} // Inline style to dynamically set border color
      />
    </>
  );
}

export default FriendPP;
