import type { Filter } from "../type/Extensions";

type FilterButtonProps = {
  btnFilter: {
    value: Filter;
    name: string;
  };
  setFilterExt: React.Dispatch<React.SetStateAction<Filter>>;
  filterExt: Filter;
};

export const Button = ({
  btnFilter: { name, value },
  setFilterExt,
  filterExt,
}: FilterButtonProps) => {
  return (
    <button
      type="button"
      aria-pressed={filterExt === value}
      onClick={() => {
        setFilterExt(value);
      }}
      className={`${filterExt === value ? "bg-focus" : "bg-surface"} border-border text-button-text focus-visible:outline-focus rounded-full border px-6 py-2 focus-visible:outline-2 hover:opacity-80`}
    >
      {name}
    </button>
  );
};
