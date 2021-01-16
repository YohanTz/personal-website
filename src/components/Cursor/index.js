import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  height: 36px;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  width: 36px;
`;

const CursorDot = styled.div`
  height: 4px;
  width: 4px;
  background-color: white;
  border-radius: 50%;
`;

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() =>
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2 - 1;
      const mouseY = clientY - cursorRef.current.clientHeight / 2 - 1;
      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }),
  );

  return (
    <CursorContainer ref={cursorRef}>
      <CursorDot />
    </CursorContainer>
  );
};

export default Cursor;
