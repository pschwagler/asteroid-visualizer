import React from "react";
import styled, { keyframes } from "styled-components";

const fly = (startTop, startLeft, endTop, endLeft) => keyframes`
  from {
    top: ${startTop}px
    left: ${startLeft}px
  }
  to {
    top: ${endTop}px
    left: ${endLeft}px
  }
`;

const Asteroid = styled.img`
  width: 20px;
  position: absolute;

  /* transition-timing-function: cubic-bezier(0, 0, 0, 0); */
  animation: ${({ startTop, startLeft, endTop, endLeft }) =>
      fly(startTop, startLeft, endTop, endLeft)}
    ${({ duration }) => duration}s linear;
`;

export default Asteroid;
