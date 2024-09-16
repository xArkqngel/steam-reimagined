import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface HeaderOptionProps {
  children?: React.ReactNode;
  name: string;
  href?: string;
}

function HeaderOption({ children, name, href }: HeaderOptionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const isActive = pathname === href;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href || "/"}>
        <h1
          className={`text-lg font-bold cursor-pointer transition-colors ${
            isActive || isHovered
              ? "text-[color:var(--color-primary)]"
              : "text-[color:var(--text-main)]"
          }`}
        >
          {name}
        </h1>
      </Link>
      {isHovered && (
        <div className="absolute z-10 pt-2 left-0 w-full opacity-100 transition-opacity duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default HeaderOption;
