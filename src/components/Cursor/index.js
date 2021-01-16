import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  border: 1px solid white;
  position: fixed;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  pointer-events: none;
  overflow: hidden;
`;

const Cursor = () => {
  const cursorRef = useRef(null);
  useEffect(() =>
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }),
  );

  return <CursorContainer ref={cursorRef} />;
};

export default Cursor;
