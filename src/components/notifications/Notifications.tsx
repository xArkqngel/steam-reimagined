import { BiSolidMessageSquareCheck } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

function Notifications() {
  return (
    <div className="flex flex-col p-4 gap-2 bg-[color:var(--bg-highlight)] rounded-md w-[340px] h-[166px]">
      <div className="flex flex-row justify-between">
        <h3 className="text-[color:var(--text-main)] text-lg font-bold">
          Notifications
        </h3>
        <div className="flex flex-row gap-2 text-[color:var(--text-dim)] items-center">
          <BiSolidMessageSquareCheck size={20} />
          <IoMdSettings size={20} />
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-row gap-2 text-[color:var(--text-dim)]">
            <MdPeopleAlt size={20} />
            <h4 className=" text-sm font-semibold">Community</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
