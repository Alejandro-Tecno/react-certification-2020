import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../providers/GlobalState/GlobalStateProvider";
import { Themes } from "../../utils/themes";

function Layout({ children }) {
  const { state } = useContext(GlobalContext);

  /* const StyledContainer = styled.main`
    color: ${state.isDark ? Themes.dark.font : Themes.ligth.font};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${state.isDark
      ? Themes.dark.background
      : Themes.ligth.background};

    a,
    p,
    h3,
    h2,
    h1,
    h4 {
      text-decoration: none;
      color: ${state.isDark ? Themes.dark.font : Themes.ligth.font};
    }
  `; */

  return <StyledContainer isDark={state.isDark}>{children}</StyledContainer>;
}

const StyledContainer = styled.main`
  color: ${(props) => (props.isDark ? Themes.dark.font : Themes.ligth.font)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) =>
    props.isDark ? Themes.dark.background : Themes.ligth.background};

  a,
  p,
  h3,
  h2,
  h1,
  h4 {
    text-decoration: none;
    color: ${(props) => (props.isDark ? Themes.dark.font : Themes.ligth.font)};
  }
`;

export default Layout;
