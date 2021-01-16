import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  /* background-color: var(--primary-color); */
  position: fixed;
  bottom: 0;
  margin: 10px;
`;

const NavbarItem = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 18px 6px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>About</NavbarItem>
      <NavbarItem>Work</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
