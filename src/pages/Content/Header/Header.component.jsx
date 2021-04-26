import React, { useContext, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import StarIcon from "@material-ui/icons/Star";
import { GlobalContext } from "../../../components/providers/GlobalState/GlobalStateProvider";
import UserContext from "../../../utils/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from "../../../components/Dropdown";
import { useAuth } from "../../../components/providers/Auth";
import {StyledHeader,StyledRigth,StyledLeft,StyledDarkModeSelector} from "./Header.styled"
function Header() {
  const { setModalOpen } = useContext(UserContext);
  const { state, dispatch } = useContext(GlobalContext);
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [open, setOpen] = useState(false);
  const { authenticated, internalUser, internalLogout } = useAuth();

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
        {(authenticated || isAuthenticated) && (
          <Link to={`/favorites`}>
            <button title="Favorite videos" className="favorites-selector">
              <StarIcon />
            </button>
          </Link>
        )}
        <Link to={`/`}>
          <button
            data-testid="home_selector"
            className="home-selector"
            title="Homepage"
          >
            <HomeIcon />
          </button>
        </Link>
      </StyledLeft>
      <SearchBar />
      <StyledRigth>
        <StyledDarkModeSelector
          title="Set Dark mode on/off"
          data-testid="darkModeButton"
          onClick={() => dispatch({ type: "TOOGLE_DARK_MODE" })}
        >
          {state.isDark ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
        </StyledDarkModeSelector>

        <div className="user" onClick={(e) => handleAuth(e)}>
          {isAuthenticated ? (
            <img alt={user.className} src={user.picture} />
          ) : authenticated ? (
            <img alt={internalUser.name} src={internalUser.avatarUrl} />
          ) : (
            <img alt="user" src="https://i.imgur.com/Cndlg8Q.png" />
          )}

          <Dropdown
            open={open}
            authenticated={authenticated}
            isAuthenticated={isAuthenticated}
            internalLogout={internalLogout}
            logout={logout}
             loginWithRedirect={loginWithRedirect}
          />
        </div>
      </StyledRigth>
    </StyledHeader>
  );
}

export default Header;
