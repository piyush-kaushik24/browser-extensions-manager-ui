import type { Extensions } from "../type/Extensions";
import { ExtensionsCard } from "./ExtensionsCard";

type ExtensionsListProps = {
  extension: Extensions[];
  onToggle: (name: string) => void;
  onRemove: (name: string) => void;
};

export const ExtensionsList = ({
  extension,
  onToggle,
  onRemove,
}: ExtensionsListProps) => {
  return (
    <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      {extension.map((ext) => (
        <li key={ext.name}>
          <ExtensionsCard
            extensions={ext}

            onToggle={onToggle}
            onRemove={onRemove}
          />
        </li>
      ))}
    </ul>
  );
};
