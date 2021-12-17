import * as React from "react";
import styled from "styled-components";

import { nav_padding } from "../../utils/css-variables";
import DarkmodeSwitcher from "./DarkmodeSwitcher";

const NavItem = styled.div`
  position: fixed;
  padding: ${nav_padding};
  z-index: 1;
`;

type NavigationProps = {
  setCursorState: React.Dispatch<
    React.SetStateAction<{
      text: string;
      position: "left" | "right";
    }>
  >;
};

const Navigation: React.FC<NavigationProps> = ({ setCursorState }) => {
  const clearCursorState = () =>
    setCursorState({ text: null, position: "left" });
  return (
    <>
      <NavItem style={{ top: 0, left: 0 }}>
        <DarkmodeSwitcher />
      </NavItem>

      <NavItem
        onMouseEnter={() =>
          setCursorState({
            // text: "Know more about me !",
            text: "Coming soon !",
            position: "right",
          })
        }
        onMouseLeave={clearCursorState}
        style={{ top: 0, right: 0 }}
      >
        about.
      </NavItem>

      <NavItem
        onMouseEnter={() =>
          setCursorState({
            // text: "See my work !",
            text: "Coming soon !",
            position: "left",
          })
        }
        onMouseLeave={clearCursorState}
        style={{ bottom: 0, left: 0 }}
      >
        work.
      </NavItem>

      <NavItem
        onMouseEnter={() =>
          setCursorState({
            // text: "Let's get in touch !",
            text: "Coming soon !",
            position: "right",
          })
        }
        onMouseLeave={clearCursorState}
        style={{ bottom: 0, right: 0 }}
      >
        contact.
      </NavItem>
    </>
  );
};

export default Navigation;
