"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderOptionProps {
  name: string;
  href?: string;
}

function SubHeaderOption({ name, href }: HeaderOptionProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <div className="relative inline-block">
      <Link href={href || "/"}>
        <h1
          className={`flex text-base cursor-pointer p-2 w-28 justify-center rounded-sm transition-colors text-[color:var(--text-main)]  ${
            isActive
              ? " bg-[color:var(--color-secondary)]"
              : "hover:bg-[color:var(--color-secondary-80)]"
          }`}
        >
          {name}
        </h1>
      </Link>
    </div>
  );
}

export default SubHeaderOption;
