import * as React from "react";
import styled from "styled-components";

import { font_color } from "../../utils/css-variables";

const CursorOutline = styled.div`
  position: fixed;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${font_color};
  height: 60px;
  width: 60px;
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease;
  opacity: 1;
  transform: translate(-100px, -100px);

  // TODO: VISIBILITY HIDDEN ON SMALL SCREEN SIZE
  @media (hover: none) and (pointer: coarse) {
    visibility: hidden;
  }
`;

const CursorDot = styled.div`
  position: fixed;
  pointer-events: none;
  height: 4px;
  width: 4px;
  background: ${font_color};
  border-radius: 50%;
  opacity: 1;
  transform: translate(-100px, -100px);
`;

const CursorText = styled.div`
  position: absolute;
  width: max-content;
  font-weight: 600;
  top: calc(50% - 0.5rem);
`;

type CursorProps = {
  cursorState: { text: string; position: "left" | "right" };
};

const Cursor: React.FC<CursorProps> = ({ cursorState }) => {
  const cursorOutlineRef = React.useRef(null);
  const cursorDotRef = React.useRef(null);

  const handleMouseMove = (event: MouseEvent) => {
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
    // cursorOutlineRef.current.style.opacity = 0;
    // cursorDotRef.current.style.opacity = 0;
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
      <CursorOutline ref={cursorOutlineRef}>
        <CursorText style={{ [cursorState.position]: "calc(100% + 1rem)" }}>
          {cursorState.text}
        </CursorText>
      </CursorOutline>
      <CursorDot ref={cursorDotRef} />
    </>
  );
};

export default Cursor;
