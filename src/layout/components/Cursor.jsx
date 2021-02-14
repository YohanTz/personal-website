import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorOutline = styled.div`
  position: fixed;
  border-radius: 50%;
  border: 1px solid white;
  height: 36px;
  pointer-events: none;
  width: 36px;
  transition: 0.09s;
  opacity: 1;
  // TODO: VISIBILITY HIDDEN ON SMALL SCREEN SIZE
  @media (hover: none) and (pointer: coarse) {
    visibility: hidden;
  }
`;
const CursorDot = styled.div`
  position: fixed;
  height: 3px;
  width: 3px;
  background: white;
  border-radius: 50%;
  top: 18px;
  left: 18px;
  opacity: 1;
`;

const Cursor = () => {
  const cursorOutlineRef = useRef(null);
  const cursorDotRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const mouseX = clientX - cursorOutlineRef.current.clientWidth / 2;
    const mouseY = clientY - cursorOutlineRef.current.clientHeight / 2;
    cursorOutlineRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    cursorDotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  };

  const handleMouseEnter = () => {
    cursorOutlineRef.current.style.opacity = 1;
    cursorDotRef.current.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    cursorOutlineRef.current.style.opacity = 0;
    cursorDotRef.current.style.opacity = 0;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    return () => [
      document.removeEventListener('mousemove', handleMouseMove),
      document.removeEventListener('mouseover', handleMouseEnter),
      document.removeEventListener('mouseout', handleMouseLeave),
    ];
  }, []);

  return (
    <>
      <CursorOutline ref={cursorOutlineRef} />
      <CursorDot ref={cursorDotRef} />
    </>
  );
};

export default Cursor;
