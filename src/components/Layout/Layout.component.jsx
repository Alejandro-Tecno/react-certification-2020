import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    all: initial;
    all: unset;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default Layout;
