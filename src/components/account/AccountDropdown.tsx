"use client";

import { FaChevronDown } from "react-icons/fa";
import { Friend } from "../../types/types";
import FriendPP from "../friends/FriendPP";
import { useState } from "react";

interface AccountDropdownProps {
  friend: Friend;
  children?: React.ReactNode;
}

function AccountDropdown({ friend, children }: AccountDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 p-1 bg-[color:var(--bg-highlight)] rounded-sm w-56 items-center">
        <FriendPP friend={friend} borderColor="transparent" size={30} />
        <p className="text-[color:var(--text-main)]">{friend.name}</p>
        <p className="text-[color:var(--text-dim)]">$343.117</p>
        <FaChevronDown
          className="text-[color:var(--text-main)] mx-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && <>{children}</>}
    </div>
  );
}

export default AccountDropdown;
