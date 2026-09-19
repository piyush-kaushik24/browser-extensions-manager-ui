import { useEffect, useState } from "react";
import { ExtensionsPage } from "./components/ExtensionsPage";
import { Header } from "./components/Header";

export const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light",
    );
  }, [theme]);

  return (
    <div className=" px-4 py-8  2xl:max-w-3/4 2xl:mx-auto">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <ExtensionsPage />
      </main>
    </div>
  );
};
