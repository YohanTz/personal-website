import React from 'react';
import styled from 'styled-components';

const TopbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <div>Y</div>
      <div>DARK MODE SWITCHER</div>
    </TopbarContainer>
  );
};

export default Topbar;
