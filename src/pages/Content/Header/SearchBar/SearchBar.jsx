import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../../../utils/UserContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(UserContext);
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    console.log(searchTerm);
  };

  return (
    <StyledForm action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInput}
      />
      {/* <Link to={`/search/${searchTerm}`}> */}
      <button className="search-button">
        <SearchIcon />
      </button>
      {/* </Link> */}
    </StyledForm>
  );
}

const StyledForm = styled.form`
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
  button {
    background: none;
    color: white;
    border: none;
  }
`;

export default SearchBar;
