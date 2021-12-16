import * as React from "react";
import styled from "styled-components";

import { nav_padding } from "../../utils/css-variables";

const NavItem = styled.div`
  position: fixed;
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
  const clearCursorState = () => setCursorState({ text: "", position: "left" });
  return (
    <>
      <NavItem
        onMouseEnter={() =>
          setCursorState({
            text: "Know more about me !",
            position: "right",
          })
        }
        onMouseLeave={clearCursorState}
        style={{ top: 0, right: 0, padding: nav_padding }}
      >
        about.
      </NavItem>
      <NavItem
        onMouseEnter={() =>
          setCursorState({
            text: "See my work !",
            position: "left",
          })
        }
        onMouseLeave={clearCursorState}
        style={{ bottom: 0, left: 0, padding: nav_padding }}
      >
        work.
      </NavItem>
      <NavItem
        onMouseEnter={() =>
          setCursorState({
            text: "Let's get in touch !",
            position: "right",
          })
        }
        onMouseLeave={clearCursorState}
        style={{ bottom: 0, right: 0, padding: nav_padding }}
      >
        contact.
      </NavItem>
    </>
  );
};

export default Navigation;
