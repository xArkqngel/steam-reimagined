import { Option } from "@/types/types";
import Link from "next/link";

interface DropdownProps {
  options?: Option[];
}

function Dropdown({ options }: DropdownProps) {
  return (
    <div className="text-[color:var(--text-main)] bg-[color:var(--bg-highlight)] w-48 rounded-sm">
      <ul>
        {options &&
          options.map((option) => (
            <Link href={option.href} key={option.name}>
              <li className="px-4 py-3 hover:bg-[color:var(--bg-hover)] text-sm">
                {option.name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default Dropdown;
