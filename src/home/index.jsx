import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  position: relative;
  font-size: 4vw;
  font-weight: normal;

  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    height: 0.5vw;
    width: 3vw;
    border-radius: 5px;
    background: var(--grey);
    animation: blinking 1.1s infinite step-end;

    @keyframes blinking {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const TypingText = styled.span`
  margin-right: 10px;
  color: var(--primary-color);
`;

const WORDS = ['Computer engineering student'];

const Home = () => {
  return (
    <Container>
      Hi! It's nice to meet you.
      <br />
      I'm Yohan, a <TypingText>{WORDS[0]}</TypingText>
    </Container>
  );
};

export default Home;
