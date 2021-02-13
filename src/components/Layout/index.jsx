import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ScrollIndication from 'components/ScrollIndicator';
import Cursor from 'components/Cursor';
import Navbar from 'components/Navbar';
import Topbar from './Topbar';

const GlobalStyle = createGlobalStyle`
  :root {
    // FONT
    --font-family: Rubik;

    // COLORS
    --bg-color: #000;
    --font-color: #fff;
    --primary-color: #FFFF8B;

    // MARGIN
    --margin-y: 15px;
  }

  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    color: var(--font-color);
  }

  * {
    cursor: none;
  }
`;

const ChildrenContainer = styled.div`
  margin: 0 calc(var(--margin-y) + 30px);
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Topbar />
      <Navbar />
      <ScrollIndication />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

export default Layout;
