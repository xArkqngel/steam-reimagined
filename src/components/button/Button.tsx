import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  number?: number;
  open?: boolean;
  onToggle: () => void;
  openRight?: boolean;
  bgColor?: string;
  textColor?: string;
}

function Button({
  icon,
  children,
  number,
  open,
  onToggle,
  openRight,
  text,
  bgColor,
  textColor,
}: ButtonProps) {
  return (
    <div className="relative inline-block w-max">
      <button
        onClick={onToggle}
        className="text-sm py-[7px] px-4 rounded-sm flex items-center space-x-2"
        style={{
          backgroundColor: bgColor ? bgColor : "var(--bg-highlight)",
          color: textColor ? textColor : "var(--text-dim)",
        }}
      >
        {text && <span>{text}</span>}
        {icon}
      </button>
      {number && (
        <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-[color:var(--color-primary)] text-[color:var(--bg-main)] text-xs font-bold rounded-full size-4 flex items-center justify-center">
          {number}
        </span>
      )}
      {open && (
        <div
          className={`absolute z-10 mt-2 ${
            openRight ? "right" : "left"
          }-0 w-max`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Button;
