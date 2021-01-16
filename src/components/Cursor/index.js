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
  transition: 0.09s;
`;

const CursorDot = styled.div`
  height: 4px;
  width: 4px;
  background-color: white;
  border-radius: 50%;
`;

const Cursor = () => {
  const cursorRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const mouseX = clientX - cursorRef.current.clientWidth / 2 - 1;
    const mouseY = clientY - cursorRef.current.clientHeight / 2 - 1;
    cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  };

  const handleMouseEnter = () => {
    cursorRef.current.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    cursorRef.current.style.opacity = 0;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => [
      document.removeEventListener('mousemove', handleMouseMove),
      document.removeEventListener('mouseenter', handleMouseEnter),
      document.removeEventListener('mouseleave', handleMouseLeave),
    ];
  }, []);

  return (
    <CursorContainer ref={cursorRef}>
      <CursorDot />
    </CursorContainer>
  );
};

export default Cursor;
