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

  React.useEffect(() => {
    // Added because we don't want any transition on page load for the background
    const timer = setTimeout(() => {
      document.body.style.transition = "background 0.2s ease, color 0.2s ease";
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return (
    <div style={{ height: "30px", width: "30px" }} onClick={toggle}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default DarkModeSwitcher;
