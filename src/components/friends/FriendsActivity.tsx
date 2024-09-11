"use client";
import { friends } from "@/consts/users";
import FriendCard from "./FriendCard";
import { useState } from "react";
import FriendEvent from "./FriendEvent";

function FriendsActivity() {
  const onlineFriends = friends.filter(
    (friend) =>
      friend.friendStatus === "online" || friend.friendStatus === "away"
  );
  const offlineFriends = friends.filter(
    (friend) => friend.friendStatus === "offline"
  );

  function getDateOfDaysAgo(daysAgo: number) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  const [friendsSelected, setFriendsSelected] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 justify-between">
        <div
          className={`${
            !friendsSelected
              ? "bg-[color:var(--bg-main)] text-[color:var(--text-dim)]"
              : "bg-[color:var(--bg-hover)] text-[color:var(--text-main)]"
          } cursor-pointer flex items-center justify-center px-12 py-1 rounded-t-sm`}
          onClick={() => setFriendsSelected(true)}
        >
          <p>Friends</p>
        </div>
        <div
          className={`${
            friendsSelected
              ? "bg-[color:var(--bg-main)] text-[color:var(--text-dim)]"
              : "bg-[color:var(--bg-hover)] text-[color:var(--text-main)]"
          } cursor-pointer flex items-center justify-center px-12 py-1 rounded-t-sm`}
          onClick={() => setFriendsSelected(false)}
        >
          <p>Activity</p>
        </div>
      </div>
      {friendsSelected ? (
        <div className="flex flex-col pl-4 pb-4 bg-[color:var(--bg-hover)] text-sm">
          <div className="flex flex-col text-[color:var(--text-dim)] mt-4">
            <p>Online ({onlineFriends.length})</p>
            <div className="flex flex-col gap-2 mt-2">
              {onlineFriends.map((friend) => (
                <FriendCard key={friend.name} {...friend} />
              ))}
            </div>
          </div>
          {/* Offline friends */}
          <div className="flex flex-col text-[color:var(--text-dim)] mt-4">
            <p>Offline ({offlineFriends.length})</p>
            <div className="flex flex-col gap-2 mt-2">
              {offlineFriends.map((friend) => (
                <FriendCard key={friend.name} {...friend} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-4 pb-4 bg-[color:var(--bg-hover)] text-sm">
          <div className="flex flex-col text-[color:var(--text-main)] mt-4">
            <p className="text-[color:var(--color-primary)]">
              {getDateOfDaysAgo(0)}
            </p>
            <div className="border-b border-[color:var(--color-secondary)] mb-2"></div>
            <FriendEvent
              eventType="wishlist"
              subject="Cyberpunk 2077"
              user={friends[5]}
            />
            <FriendEvent
              eventType="friend"
              subject=""
              friend={friends[2]}
              user={friends[3]}
            />
            <FriendEvent
              eventType="friend"
              subject=""
              friend={friends[3]}
              user={friends[5]}
            />
          </div>
          <div className="flex flex-col text-[color:var(--text-main)] mt-4">
            <p className="text-[color:var(--color-primary)]">
              {getDateOfDaysAgo(4)}
            </p>
            <div className="border-b border-[color:var(--color-secondary)] mb-2"></div>
            <FriendEvent
              eventType="game"
              subject="Red Dead Redemption 2"
              user={friends[1]}
            />
            <FriendEvent
              eventType="friend"
              subject=""
              friend={friends[1]}
              user={friends[4]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendsActivity;
