import React, { useState, useContext } from "react";
import styled from "styled-components";
import DehazeIcon from "@material-ui/icons/Dehaze";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import UserContext from "../../../utils/UserContext";
import { ThemeContext } from "../../../utils/GlobalStateProvider";
import { Themes } from "../../../utils/themes";

function Header() {
  const { darkTheme, setDarkTheme } = useContext(UserContext);
  const { state, dispatch } = useContext(ThemeContext);

  const handleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };

  //styled

  const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    height: 60px;
    background: ${state.isDark
      ? Themes.dark.headerColor
      : Themes.ligth.headerColor};
    align-items: center;
    z-index: 100;
    /* -webkit-box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
    -moz-box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
    box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1); */
    button {
      margin: 0px 10px;
      box-sizing: border-box;
      justify-content: center;
      display: flex;
      align-items: center;
    }
    .nav-selector,
    .home-selector {
      align-items: flex-start;
      background: none;
      border-radius: 10px;
      border: none;
      color: white;
      font-size: 2.5rem;
      flex: 1;
      margin-left: 1rem;
    }
    form {
      height: 60px;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex: 1;
      max-width: 28vw;
      margin-left: 2rem;
      transition: all 0.6s ease-in-out;
      &:focus {
        max-width: 40vw;
      }
      &:hover {
        max-width: 40vw;
        input {
          background: #cddff0;
          width: 38vw;
        }
      }

      input {
        border: none;
        background: #bad7ee;
        height: 30px;
        border-radius: 3px;
        width: 26vw;
        box-sizing: border-box;
        padding: 2px 10px;
        font-size: 1rem;
        &:focus {
          border: none;
          background: #cddff0;
          width: 38vw;
        }
      }
    }
  `;

  //styled ends

  console.log(state);
  return (
    <StyledHeader /* style="background-color: ${darkTheme ? #fff : #384d5f}" */>
      <div>
        <button className="nav-selector" data-testid="nav_selector">
          <DehazeIcon />
        </button>
      </div>
      <Link to={`/`}>
        <button className="home-selector">
          <HomeIcon />
        </button>
      </Link>
      <SearchBar />
      <StyledRigth>
        <StyledDarkModeSelector
          data-testid="darkModeButton"
          onClick={() => dispatch({ type: "TOOGLE_DARK_MODE" })}
        >
          {state.isDark ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
        </StyledDarkModeSelector>
        <div className="user">
          <img
            alt="user"
            src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
          />
        </div>
      </StyledRigth>
    </StyledHeader>
  );
}

/* const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 60px;
  background: #384d5f ;
   align-items: center;
  z-index: 100;
  -webkit-box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
  -moz-box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
  box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
  button {
    margin: 0px 10px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .nav-selector,
  .home-selector {
    align-items: flex-start;
    background: none;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 2.5rem;
    flex: 1;
    margin-left: 1rem;
  }
  form {
    height: 60px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    max-width: 28vw;
    margin-left: 2rem;
    transition: all 0.6s ease-in-out;
    &:focus {
      max-width: 40vw;
    }
    &:hover {
      max-width: 40vw;
      input {
        background: #cddff0;
        width: 38vw;
      }
    }

    input {
      border: none;
      background: #bad7ee;
      height: 30px;
      border-radius: 3px;
      width: 26vw;
      box-sizing: border-box;
      padding: 2px 10px;
      font-size: 1rem;
      &:focus {
        border: none;
        background: #cddff0;
        width: 38vw;
      }
    }
  }
`;
 */
const StyledRigth = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;
  font-size: 1.5rem !important;
  span {
    font-size: 0.7rem;
    color: white;
  }
  .user {
    display: flex;
    align-items: center;
  }
  img {
    border-radius: 50%;
    height: 40px;
    margin-right: 1rem;
  }
  img:hover {
    border: 2px solid #bebebe;
  }
`;

const StyledDarkModeSelector = styled.button`
  margin-right: 15px;
  font-size: 1.5rem;
  color: white;
  display: flex;
`;

export default Header;
