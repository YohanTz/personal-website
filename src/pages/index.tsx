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

const IndexPage = () => {
  // TODO: Add typing text
  return (
    <>
      <SEO />
      <Container>
        <Paragraph>
          Hi, It's nice to meet you !
          <br />
          I'm Yohan, a <TypingText>Software engineering student_</TypingText>
        </Paragraph>
      </Container>
    </>
  );
};

export default IndexPage;
