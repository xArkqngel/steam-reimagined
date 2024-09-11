import Button from "@/components/button/Button";
import Friends from "@/components/friends/Friends";
import Notifications from "@/components/notifications/Notifications";
import { IoIosNotifications } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="p-4 gap-2 flex flex-col">
        <Button number={1} icon={<IoIosNotifications size={25} />}>
          <Notifications />
        </Button>
        <Button icon={<IoIosNotifications size={25} />} />
        <Button icon={<MdPeopleAlt size={25} />} number={4}>
          <Friends />
        </Button>
        <Button icon={<MdPeopleAlt size={25} />} />
      </div>
    </div>
  );
}
