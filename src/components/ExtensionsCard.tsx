import type { Extensions } from "../type/Extensions";
type ExtensionsCardProps = {
  extensions: Extensions;

  onToggle: (name: string) => void;
  onRemove: (name: string) => void;
};

export const ExtensionsCard = ({
  extensions: { name, feature, image, status },
  onToggle,
  onRemove,
}: ExtensionsCardProps) => {
  return (
    <article className="bg-surface border-border flex h-full flex-col justify-between rounded-xl border-2 p-4">
      <div className="grid grid-cols-[5rem_1fr]">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-heading text-xl font-bold">{name}</h2>
          <p className="text-text">{feature}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          className="border-border text-button-text full focus-visible:outline-focus w-30 rounded-full border-2 p-2 font-semibold hover:opacity-80 focus-visible:outline-2"
          onClick={() => onRemove(name)}
        >
          Remove
        </button>
        <button
          type="button"
          aria-pressed={status}
          aria-label={`${status ? "Toggle OFF" : "Toggle ON"}`}
          className={`${status ? "bg-toggle-off" : "bg-toggle-on"} focus-visible:outline-focus relative h-6 w-12 rounded-full border hover:opacity-80 focus-visible:outline-2`}
          onClick={() => onToggle(name)}
        >
          {status ? (
            <span>
              <span className="bg-neutral-0 absolute left-0 ml-0.5 block h-5 w-5 -translate-y-1/2 rounded-full"></span>
            </span>
          ) : (
            <span>
              <span className="bg-neutral-0 absolute right-0 mr-0.5 block h-5 w-5 -translate-y-1/2 rounded-full"></span>
            </span>
          )}
        </button>
      </div>
    </article>
  );
};
