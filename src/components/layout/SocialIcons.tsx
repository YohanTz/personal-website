import * as React from "react";
import styled from "styled-components";

import { font_color, nav_padding } from "../../utils/css-variables";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  right: ${nav_padding};
  top: calc(50% - 5rem);
  z-index: 1;
`;

const SocialIcons = () => {
  // TODO: Add animations on hover + cursor stuck on icon
  return (
    <Container>
      <a href="https://github.com/YohanTz" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.8rem"
          width="1.8rem"
        >
          <title>GitHub</title>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>

      <a href="https://www.twitch.tv/yohantz" target="_blank">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.8rem"
          width="1.8rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Twitch</title>
          <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/yohan-tancrez-1302aa163/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.8rem"
          width="1.8rem"
        >
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
    </Container>
  );
};

export default SocialIcons;
