import { BiSolidMessageSquareCheck } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

function Notifications() {
  return (
    <div className="flex flex-col p-4 gap-4 bg-[color:var(--bg-highlight)] rounded-md w-[340px] h-[166px]">
      <div className="flex flex-row justify-between">
        <h3 className="text-[color:var(--text-main)] text-lg font-bold">
          Notifications
        </h3>
        <div className="flex flex-row gap-2 text-[color:var(--text-dim)] items-center">
          <BiSolidMessageSquareCheck size={20} />
          <IoMdSettings size={20} />
        </div>
      </div>
      <div className="flex flex-col rounded-sm p-2 bg-[color:var(--bg-main-50)] gap-2">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 text-[color:var(--text-dim)]">
            <MdPeopleAlt size={16} />
            <h4 className=" text-xs font-normal">Community</h4>
          </div>
          <span className="bg-[color:var(--color-primary)] text-[color:var(--bg-main)] text-xs font-bold rounded-full size-3" />
        </div>
        <p className="text-[color:var(--text-main)] font-light text-base">
          <b className="text-[color:var(--color-primary)]">Your Friend</b> left
          a comment on your profile
        </p>
      </div>
    </div>
  );
}

export default Notifications;
