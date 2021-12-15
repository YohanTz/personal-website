import * as React from "react";

import Cursor from "./Cursor";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
};

export default Layout;
