import { headerOptions } from "@/consts/header";
import SubHeaderOption from "./SubHeaderOption";
import SearchBar from "@/components/search/SearchBar";

function StoreHeader() {
  return (
    <div className="flex flex-row p-2 justify-between items-center  bg-[color:var(--bg-tertiary)]">
      <div className="flex flex-row">
        {headerOptions[0].options?.map((option) => (
          <SubHeaderOption
            key={option.name}
            name={option.name}
            href={option.href}
          />
        ))}
      </div>
      <SearchBar />
    </div>
  );
}

export default StoreHeader;
