import * as React from "react";
import styled from "styled-components";

const CursorOutline = styled.div`
  position: fixed;
  border-radius: 50%;
  border: 1px solid black;
  height: 60px;
  width: 60px;
  pointer-events: none;
  /* transition: opacity 0.1s, transform 0.1s; */
  transition: opacity 0.1s ease, transform 0.1s ease;
  opacity: 1;

  // TODO: VISIBILITY HIDDEN ON SMALL SCREEN SIZE
  @media (hover: none) and (pointer: coarse) {
    visibility: hidden;
  }
`;
const CursorDot = styled.div`
  position: fixed;
  pointer-events: none;
  height: 3px;
  width: 3px;
  background: black;
  border-radius: 50%;
  opacity: 1;
`;

const Cursor = () => {
  const cursorOutlineRef = React.useRef(null);
  const cursorDotRef = React.useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const cursorOutlinePositionX =
      clientX - cursorOutlineRef.current.clientWidth / 2;
    const cursorOutlinePositionY =
      clientY - cursorOutlineRef.current.clientHeight / 2;

    const cursorDotPositionX = clientX - cursorDotRef.current.clientWidth / 2;
    const cursorDotPositionY = clientY - cursorDotRef.current.clientHeight / 2;

    cursorOutlineRef.current.style.transform = `translate(${cursorOutlinePositionX}px, ${cursorOutlinePositionY}px)`;
    cursorDotRef.current.style.transform = `translate(${cursorDotPositionX}px, ${cursorDotPositionY}px)`;
  };

  const handleMouseEnter = () => {
    cursorOutlineRef.current.style.opacity = 1;
    cursorDotRef.current.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    cursorOutlineRef.current.style.opacity = 0;
    cursorDotRef.current.style.opacity = 0;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <CursorOutline ref={cursorOutlineRef} />
      <CursorDot ref={cursorDotRef} />
    </>
  );
};

export default Cursor;
