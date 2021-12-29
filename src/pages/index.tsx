import * as React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import SEO from "../components/SEO";
import { font_color, nav_padding, primary_color } from "../utils/css-variables";

const Container = styled.section`
  position: absolute;
  inset: calc(2 * ${nav_padding});
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled(motion.p)`
  position: relative;
  font-size: 1.5rem;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: -1rem;
    height: 0.3rem;
    width: 5rem;
    background: ${font_color};
    transition: background 0.1s ease;
  }
`;

const TypingText = styled.span`
  color: ${primary_color};
`;

const PHRASES = [
  "Software engineering student @Epita",
  "Software engineer @HuskyAvax",
  "React lover",
];

const PAUSE_DURATION = 80;

const IndexPage = () => {
  const currentPhraseIndexRef = React.useRef(0);
  const isDeletingRef = React.useRef(false);
  const [currentCharacterIndex, setCurrentCharacterIndex] = React.useState(0);

  // Used cause we have a closure inside of the setInterval function
  const currentCharacterIndexRef = React.useRef(currentCharacterIndex);
  currentCharacterIndexRef.current = currentCharacterIndex;

  const pauseCounterRef = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (pauseCounterRef.current) {
        pauseCounterRef.current =
          pauseCounterRef.current > PAUSE_DURATION
            ? 0
            : pauseCounterRef.current + 1;
        return;
      }

      if (!isDeletingRef.current) {
        if (
          currentCharacterIndexRef.current <
          PHRASES[currentPhraseIndexRef.current].length
        ) {
          setCurrentCharacterIndex((previousValue) => previousValue + 1);
          return;
        }
        isDeletingRef.current = true;
        pauseCounterRef.current = 1;
        return;
      }
      if (currentCharacterIndexRef.current > 0) {
        setCurrentCharacterIndex((previous) => previous - 1);
        return;
      } else {
        isDeletingRef.current = false;
        currentPhraseIndexRef.current =
          (currentPhraseIndexRef.current + 1) % PHRASES.length;
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      translateY: "2rem",
    },
    animate: {
      opacity: 1,
      translateY: "0rem",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <SEO />
      <Container>
        <AnimatePresence>
          <Paragraph initial="initial" animate="animate" variants={variants}>
            Hi, It's nice to meet you !
            <br />
            I'm Yohan, a{" "}
            <TypingText>
              {PHRASES[currentPhraseIndexRef.current].substring(
                0,
                currentCharacterIndex
              )}
              <div style={{ display: "inline", color: "#858585" }}>_</div>
            </TypingText>
          </Paragraph>
        </AnimatePresence>
      </Container>
    </>
  );
};

export default IndexPage;
