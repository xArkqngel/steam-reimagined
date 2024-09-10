"use client";
import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
  number?: number;
}

function Button({ icon, children, number }: ButtonProps) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className="relative inline-block w-max" onClick={handleToggle}>
        <button className="bg-[color:var(--bg-highlight)] py-2 px-4 text-[color:var(--text-dim)] rounded-md">
          {icon}
        </button>
        {number && (
          <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-[color:var(--color-primary)] text-[color:var(--bg-main)] text-xs font-bold rounded-full size-5 flex items-center justify-center">
            {number}
          </span>
        )}
      </div>
      {open && <>{children}</>}
    </>
  );
}

export default Button;
