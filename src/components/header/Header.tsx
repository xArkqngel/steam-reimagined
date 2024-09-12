import { headerOptions } from "@/consts/header";
import Image from "next/image";
import Friends from "@/components/friends/Friends";
import Notifications from "@/components/notifications/Notifications";
import AccountDropdown from "@/components/account/AccountDropdown";
import Button from "@/components/button/Button";
import Dropdown from "@/components/dropdown/Dropdown";
import { IoIosNotifications } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { friends } from "@/consts/users";
import { accountDropdownOptions } from "@/consts/dropdowns";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-4 text-[color:var(--text-main)] bg-[color:var(--bg-main)]">
      <div className="flex flex-row gap-16">
        <Image
          src="/static/images/logo_steam.svg"
          alt="logo"
          width={100}
          height={50}
        />
        {headerOptions.map((option) => (
          <p
            className="text-[color:var(--text-main)] text-lg font-bold cursor-pointer hover:text-[color:var(--color-primary)]"
            key={option}
          >
            {option}
          </p>
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Button number={1} icon={<IoIosNotifications size={25} />}>
          <Notifications />
        </Button>
        <Button icon={<MdPeopleAlt size={25} />} number={4}>
          <Friends />
        </Button>
        <AccountDropdown friend={friends[5]}>
          <Dropdown options={accountDropdownOptions} />
        </AccountDropdown>
      </div>
    </header>
  );
}

export default Header;
