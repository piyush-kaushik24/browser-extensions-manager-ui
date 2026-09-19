import { useState } from "react";
import { extensionsList } from "../data/Data";
import type { Filter } from "../type/Extensions";
import { ExtensionsList } from "./ExtensionsList";
import { FilterExtension } from "./FilterExtension";

export const ExtensionsPage = () => {
  const [extensions, setExtensions] = useState(extensionsList);
  const [filterExt, setFilterExt] = useState<Filter>("all");

  function handleToggle(name: string) {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.name === name
          ? { ...extension, status: !extension.status }
          : extension,
      ),
    );
  }
  function handleRemove(name: string) {
    setExtensions((prev) =>
      prev.filter((extension) => extension.name !== name),
    );
  }
  const filterState = extensions.filter((extension) => {
    if (filterExt === "all") {
      return true;
    } else if (filterExt === "inactive") {
      return extension.status;
    }
    return !extension.status;
  });

  return (
    <div className="grid gap-4">
      <div className="items-center justify-between *:py-4 lg:flex">
        <h1 className="text-heading mt-6 text-center text-3xl font-bold">
          Extensions List
        </h1>
        <FilterExtension filterExt={filterExt} setFilterExt={setFilterExt} />
      </div>
      <ExtensionsList
        extension={filterState}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </div>
  );
};
