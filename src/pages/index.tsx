import * as React from "react";
import styled from "styled-components";

import SEO from "../components/SEO";
import { font_color, nav_padding, primary_color } from "../utils/css-variables";

const Container = styled.section`
  position: absolute;
  inset: calc(2 * ${nav_padding});
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled.p`
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

const IndexPage = () => {
  const currentPhraseIndexRef = React.useRef(0);
  const isDeletingRef = React.useRef(false);
  const [currentCharacterIndex, setCurrentCharacterIndex] = React.useState(0);

  // Used cause we have a closure inside of the setInterval function
  const currentCharacterIndexRef = React.useRef(currentCharacterIndex);
  currentCharacterIndexRef.current = currentCharacterIndex;

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeletingRef.current) {
        if (
          currentCharacterIndexRef.current <
          PHRASES[currentPhraseIndexRef.current].length
        ) {
          setCurrentCharacterIndex((previousValue) => previousValue + 1);
        } else {
          isDeletingRef.current = true;
        }
      } else {
        if (currentCharacterIndexRef.current > 0)
          setCurrentCharacterIndex((previous) => previous - 1);
        else {
          isDeletingRef.current = false;
          currentPhraseIndexRef.current =
            (currentPhraseIndexRef.current + 1) % PHRASES.length;
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  console.log(currentCharacterIndexRef.current);

  return (
    <>
      <SEO />
      <Container>
        <Paragraph>
          Hi, It's nice to meet you !
          <br />
          I'm Yohan, a{" "}
          <TypingText>
            {PHRASES[currentPhraseIndexRef.current].substring(
              0,
              currentCharacterIndex
            )}
            _
          </TypingText>
        </Paragraph>
      </Container>
    </>
  );
};

export default IndexPage;
