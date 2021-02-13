import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  margin: 15px var(--margin-y);
`;

const NavbarItem = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 15px 6px;
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
