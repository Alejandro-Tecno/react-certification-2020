import React, { useState, useContext, useEffect } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import styled from "styled-components";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from "@material-ui/icons/Search";
import useFetch from "../../../components/Hooks/useFetch";
import { Link } from "react-router-dom";
import { UserContext } from "../../../utils/UserContext";
import SearchBar from "./SearchBar/SearchBar";

function Header({ searchTest, setSearchTest }) {
  /* const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }; */

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledHeader>
      <div>
        <button className="nav-selector" data-testid="nav_selector">
          <DehazeIcon />
        </button>
      </div>
      <Link to={`/`}>
        <h2>Home</h2>
      </Link>
      <SearchBar />
      <StyledRigth>
        <div className="dark-mode-selector">
          <FormControlLabel
            control={
              <Switch
                data-testid="switch_dm"
                checked={darkMode}
                onChange={handleChange}
                name="darkMode"
                color="secondary"
              />
            }
            label="Dark&nbsp;mode"
          />
        </div>
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

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 60px;
  background: #384d5f;
  align-items: center;
  z-index: 100;
  -webkit-box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
  -moz-box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
  box-shadow: 1px 0px 7px 5px rgba(194, 194, 194, 1);
  button:focus {
    border: none;
  }

  .nav-selector {
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
      }
      &:hover {
        background: #cddff0;
      }
    }
  }
  button {
    background: none;
    color: white;
    border: none;
  }
`;

const StyledRigth = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;
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
  }
  img:hover {
    border: 2px solid #bebebe;
  }
`;

export default Header;
