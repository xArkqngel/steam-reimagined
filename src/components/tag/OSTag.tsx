import { FaApple, FaLinux, FaWindows } from "react-icons/fa";

function OSTag({ os }: { os: string }) {
  return (
    <>
      {os === "mac" ? (
        <div className="rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
          <FaApple size={15} />
        </div>
      ) : os === "windows" ? (
        <div className="rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
          <FaWindows size={15} />
        </div>
      ) : os === "linux" ? (
        <div className="rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
          <FaLinux size={15} />
        </div>
      ) : null}
    </>
  );
}

export default OSTag;
