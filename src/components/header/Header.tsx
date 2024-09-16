"use client";
import { useState } from "react";
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
import HeaderOption from "./HeaderOption";
import Link from "next/link";

function Header() {
  const [openComponent, setOpenComponent] = useState<string | null>(null);

  const handleToggle = (component: string) => {
    setOpenComponent((prev) => (prev === component ? null : component));
  };

  return (
    <header className="flex flex-row items-center justify-between p-4 text-[color:var(--text-main)] bg-[color:var(--bg-main)]">
      <div className="flex flex-row gap-16 cursor-pointer">
        <Link href="/">
          <Image
            src="/static/images/logo_steam.svg"
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        {headerOptions.map((option) => (
          <HeaderOption key={option.name} name={option.name} href={option.href}>
            <Dropdown options={option.options} />
          </HeaderOption>
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Button
          number={1}
          icon={<IoIosNotifications size={25} />}
          open={openComponent === "notifications"}
          onToggle={() => handleToggle("notifications")}
        >
          <Notifications />
        </Button>
        <Button
          number={4}
          icon={<MdPeopleAlt size={25} />}
          open={openComponent === "friends"}
          onToggle={() => handleToggle("friends")}
          openRight
        >
          <Friends />
        </Button>
        <AccountDropdown
          friend={friends[5]}
          open={openComponent === "accountDropdown"}
          onToggle={() => handleToggle("accountDropdown")}
        >
          <Dropdown options={accountDropdownOptions} />
        </AccountDropdown>
      </div>
    </header>
  );
}

export default Header;
