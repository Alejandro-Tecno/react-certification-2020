import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import UserContext from "../../../../utils/UserContext";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(UserContext);
  const [inputValue, setInputValue] = useState(searchTerm);
  let history = useHistory();
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    console.log(searchTerm);
    history.push(`/search/${inputValue}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="form">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInput}
      />

      <button className="search-button" type="submit">
        <SearchIcon />
      </button>
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
