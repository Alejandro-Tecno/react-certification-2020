import React, { useContext, useState } from "react";
import styled from "styled-components";
import DehazeIcon from "@material-ui/icons/Dehaze";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import StarIcon from "@material-ui/icons/Star";
import { ThemeContext } from "../../../utils/GlobalStateProvider";
import { Themes } from "../../../utils/themes";
import { useHistory } from "react-router-dom";
import UserContext from "../../../utils/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from "../../../components/Dropdown";
import { useAuth } from "../../../components/provider";

function Header() {
  const { modalOpen, setModalOpen } = useContext(UserContext);
  const { state, dispatch } = useContext(ThemeContext);
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);
  const { authenticated, internalUser } = useAuth();
  let history = useHistory();

  const handleAuth = (e) => {
    e.preventDefault();
    isAuthenticated
      ? setOpen(!open)
      : authenticated
      ? setOpen(!open)
      : setModalOpen(true);
  };
  return (
    <StyledHeader data-testid="Header" isDark={state.isDark}>
      <StyledLeft>
        <button className="favorites-selector" data-testid="nav_selector">
          <StarIcon />
        </button>

        <Link to={`/`}>
          <button className="home-selector">
            <HomeIcon />
          </button>
        </Link>
      </StyledLeft>
      <SearchBar />
      <StyledRigth>
        <StyledDarkModeSelector
          data-testid="darkModeButton"
          onClick={() => dispatch({ type: "TOOGLE_DARK_MODE" })}
        >
          {state.isDark ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
        </StyledDarkModeSelector>
        {/* <Link to={`/login`}> */}
        <div
          className="user"
          /* onClick={() =>  loginWithRedirect()} */
          /* onClick={() => setOpen(!open)} */
          onClick={(e) => handleAuth(e)}
        >
          {isAuthenticated ? (
            <img alt={user.className} src={user.picture} />
          ) : authenticated ? (
            <img alt={internalUser.name} src={internalUser.avatarUrl} />
          ) : (
            <img alt="user" src="https://i.imgur.com/Cndlg8Q.png" />
          )}

          <Dropdown open={open} />
        </div>
        {/* </Link> */}
      </StyledRigth>
    </StyledHeader>
  );
}

//styled

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 60px;
  background: ${(props) =>
    props.isDark ? Themes.dark.headerColor : Themes.ligth.headerColor};
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
    cursor: pointer;
  }
  .favorites-selector,
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
  .home-selector {
    @media (max-width: 500px) {
      margin-left: 5px !important;
    }
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
      transition: all 0.6s ease-in-out;
      &:focus {
        border: none;
        background: #cddff0;
        width: 38vw;
      }
    }
  }
`;

//styled ends

const StyledRigth = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;
  font-size: 1.5rem !important;
  @media (max-width: 400px) {
    margin-right: 5px;
  }
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
    @media (max-width: 400px) {
      margin-right: 5px;
    }
  }
  img:hover {
    border: 2px solid #bebebe;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: table-row;
  align-items: center;
`;

const StyledDarkModeSelector = styled.button`
  margin-right: 15px;
  font-size: 1.5rem;
  color: white;
  display: flex;
  background: transparent;
  border: none;
`;

export default Header;
