import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../utils/UserContext";
import { ThemeContext } from "../../utils/GlobalStateProvider";
import { Themes } from "../../utils/themes";

function Layout({ children }) {
  const { state, dispatch } = useContext(ThemeContext);

  const StyledContainer = styled.main`
    width: 100vw;
    color: ${state.isDark ? Themes.dark.font : Themes.ligth.font};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${state.isDark
      ? Themes.dark.background
      : Themes.ligth.background};
    overflow: scroll;
    button {
      all: initial;
      all: unset;
      background: none;
      color: white;
      border: none;
      cursor: pointer;
    }
    a,
    p,
    h3,
    h2,
    h1,
    h4 {
      text-decoration: none;
      color: ${state.isDark ? Themes.dark.font : Themes.ligth.font};
    }
  `;

  return <StyledContainer>{children}</StyledContainer>;
}

export default Layout;
