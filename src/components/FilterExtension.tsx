import React from "react";
import { filterBtns } from "../data/Data";
import type { Filter } from "../type/Extensions";
import { Button } from "./Button";

type FilterExtensionProps = {
  filterExt: Filter;
  setFilterExt: React.Dispatch<React.SetStateAction<Filter>>;
};
export const FilterExtension = ({
  filterExt,
  setFilterExt,
}: FilterExtensionProps) => {
  return (
    <ul className="flex justify-center gap-2">
      {filterBtns.map((btns) => (
        <li key={btns.name}>
          <Button
            btnFilter={btns}
            setFilterExt={setFilterExt}
            filterExt={filterExt}
          />
        </li>
      ))}
    </ul>
  );
};
