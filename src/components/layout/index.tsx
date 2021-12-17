import * as React from "react";

import Cursor from "./Cursor";
import "./layout.css";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  const [cursorState, setCursorState] = React.useState({
    text: null as null | string,
    position: "right" as "right" | "left",
  });

  return (
    <>
      <Cursor cursorState={cursorState} />
      <Navigation setCursorState={setCursorState} />
      {children}
    </>
  );
};

export default Layout;
