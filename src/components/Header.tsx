import { iconMoon, iconSun, Logo } from "../assets";
type HeaderProps = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Header = ({ theme, setTheme }: HeaderProps) => {
  return (
    <header className="bg-surface flex items-center justify-between rounded-2xl p-4">
      <div>
        <a href="#">
          <Logo className="text-heading" />
        </a>
      </div>
      <div>
        <button
          type="button"
          aria-pressed={theme}
          aria-label={`${theme ? "Dark Mode Enabled" : "Dark Mode Disabled"}`}

          onClick={() => setTheme(!theme)}
          className="bg-toggle-theme focus-visible:outline-focus rounded-lg p-2 focus-visible:outline"
        >
          {theme ? (
            <img src={iconSun} alt="" />
          ) : (
            <img src={iconMoon} alt="" className="" />
          )}
        </button>
      </div>
    </header>
  );
};
