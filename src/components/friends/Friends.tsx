import { friends } from "@/consts/users";
import FriendPP from "./FriendPP";
import { IoIosAddCircleOutline } from "react-icons/io";
import FriendsActivity from "./FriendsActivity";

function Friends() {
  return (
    <div
      className="flex flex-col rounded-md p-4 gap-10 w-[340px]"
      style={{ background: "var(--gradient-friends-bg)" }}
    >
      <div className="flex flex-row gap-2 items-center">
        <FriendPP friend={friends[5]} />
        <div className="flex flex-row items-center justify-between w-full text-[color:var(--text-dim)]">
          <div className="flex flex-col justify-center">
            <p className="text-[color:var(--text-main)] font-semibold">
              Unknown
            </p>
            <div className="flex flex-row gap-2 items-center">
              <span className="bg-[color:var(--color-primary)] text-[color:var(--bg-main)] text-xs font-bold rounded-full size-2" />
              <p className="text-[color:var(--color-primary)] text-xs">
                Online
              </p>
            </div>
          </div>
          <IoIosAddCircleOutline size={20} />
        </div>
      </div>
      <FriendsActivity />
    </div>
  );
}

export default Friends;
