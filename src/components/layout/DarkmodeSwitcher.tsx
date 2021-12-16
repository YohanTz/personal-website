import * as React from "react";
import { useLocalStorageState } from "../../hooks";

const DarkmodeSwitcher = () => {
  const [theme, setTheme] = useLocalStorageState("theme", "light");

  React.useEffect(
    () => document.documentElement.setAttribute("theme", theme),
    [theme]
  );

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme}
    </div>
  );
};

export default DarkmodeSwitcher;
