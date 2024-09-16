import { FaChevronDown } from "react-icons/fa";
import { Friend } from "../../types/types";
import FriendPP from "../friends/FriendPP";

interface AccountDropdownProps {
  friend: Friend;
  children?: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}

function AccountDropdown({
  friend,
  children,
  open,
  onToggle,
}: AccountDropdownProps) {
  return (
    <div className="relative inline-block w-56">
      <div
        className="flex flex-row gap-2 p-1 bg-[color:var(--bg-highlight)] rounded-sm items-center cursor-pointer"
        onClick={onToggle}
      >
        <FriendPP friend={friend} borderColor="transparent" size={30} />
        <p className="text-[color:var(--text-main)]">{friend.name}</p>
        <p className="text-[color:var(--text-dim)]">$343.117</p>
        <FaChevronDown className="text-[color:var(--text-main)] mx-2" />
      </div>

      {open && (
        <div className="absolute z-10 mt-2 left-0 w-full">{children}</div>
      )}
    </div>
  );
}

export default AccountDropdown;
