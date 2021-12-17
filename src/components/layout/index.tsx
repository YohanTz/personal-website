import * as React from "react";
import styled from "styled-components";

import "./layout.css";
import Cursor from "./Cursor";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import { nav_padding } from "../../utils/css-variables";

const Container = styled.div`
  padding: calc(2 * ${nav_padding});
  min-height: 100vh;
  position: relative;
`;

const Layout: React.FC = ({ children }) => {
  const [cursorState, setCursorState] = React.useState({
    text: null as null | string,
    position: "right" as "right" | "left",
  });

  return (
    <>
      <Cursor cursorState={cursorState} />
      <Navigation setCursorState={setCursorState} />
      <SocialIcons />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
