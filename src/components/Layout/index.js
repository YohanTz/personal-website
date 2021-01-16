import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Cursor from 'components/Cursor';
import Navbar from 'components/Navbar';
import Topbar from './Topbar';

const GlobalStyle = createGlobalStyle`
  :root {
    // FONT
    --font-family: sans-serif;

    // COLORS
    --bg-color: #000;
    --font-color: #fff;
    --primary-color: orange;
  }

  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    color: var(--font-color);
    cursor: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Topbar />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
