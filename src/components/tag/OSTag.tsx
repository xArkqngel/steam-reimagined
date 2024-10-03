import { FaApple, FaFacebookF, FaLinux, FaWindows } from "react-icons/fa";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

function OSTag({ os }: { os: string }) {
  return (
    <>
      {os === "mac" ? (
        <div className="flex items-center justify-center rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
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
      ) : os === "fb" ? (
        <div className="rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
          <FaFacebookF size={15} />
        </div>
      ) : os === "x" ? (
        <div className="rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
          <FaXTwitter size={15} />
        </div>
      ) : null}
    </>
  );
}

export default OSTag;
