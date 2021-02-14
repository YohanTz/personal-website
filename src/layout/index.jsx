import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Cursor, Navbar, ScrollIndicator, Topbar } from './components';

const GlobalStyle = createGlobalStyle`
  :root {
    // FONT
    --font-family: Rubik;

    // COLORS
    --bg-color: #101010;
    --font-color: #EFEFEF;
    --primary-color: #FFFF8B;
    --primary-selection-color: #FFFF8BC0;
    --grey: #5A5A5A;

    // MARGIN
    --margin-y: 25px;
  }

  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background: var(--bg-color);
    color: var(--font-color);
  }

  * {
    cursor: none;
  }

  ::selection {
    background: var(--primary-selection-color);
    color: black;
  }
`;

const ChildrenContainer = styled.div`
  margin: 0 calc(var(--margin-y) + 50px);
  height: 100%;
`;

const Layout = ({ children, errorPage }) => {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Topbar />
      {!errorPage && (
        <>
          <Navbar />
          <ScrollIndicator />
        </>
      )}
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

export default Layout;
