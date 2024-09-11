import { Friend } from "@/consts/users";
import FriendPP from "./FriendPP";

interface FriendEventProps {
  user: Friend;
  subject?: string;
  friend?: Friend;
  eventType: "wishlist" | "game" | "friend";
}

function FriendEvent({ user, subject, friend, eventType }: FriendEventProps) {
  const text1 =
    eventType === "wishlist"
      ? "added"
      : eventType === "game"
      ? "now owns"
      : "and";

  const text2 =
    eventType === "wishlist"
      ? "to their wishlist"
      : eventType === "game"
      ? ""
      : "are now friends";

  return (
    <div className="flex flex-row gap-2 items-center">
      {eventType !== "friend" ? (
        <FriendPP friend={user} size={25} />
      ) : (
        friend && (
          <div className="relative h-10">
            <div className="absolute top-1/4 left-1/4 transform translate-x-1 translate-y-1 z-10">
              <FriendPP friend={friend} size={25} />
            </div>
            <div className="relative">
              <FriendPP friend={user} size={25} />
            </div>
          </div>
        )
      )}
      <p>
        <b className="text-[color:var(--color-primary)] font-normal">
          {user.name}
        </b>{" "}
        {`${text1} `}
        <b className="text-[color:var(--color-primary)] font-normal">
          {subject ? subject : friend?.name}
        </b>{" "}
        {text2}
      </p>
    </div>
  );
}

export default FriendEvent;
