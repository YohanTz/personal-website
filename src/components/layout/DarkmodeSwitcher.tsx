import * as React from "react";

import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useLocalStorageState } from "../../hooks";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useLocalStorageState("theme", "light");

  React.useEffect(
    () => document.documentElement.setAttribute("theme", theme),
    [theme]
  );

  return (
    <div
      style={{ height: "30px", width: "30px" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default DarkModeSwitcher;
