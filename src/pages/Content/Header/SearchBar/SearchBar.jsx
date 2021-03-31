import React, { useState, useContext, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../../../utils/UserContext";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  const { value, setValue } = useContext(UserContext);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    console.log(`Search term in input is ${searchTerm}`);
  };

  function search(e) {
    e.preventDefault();
    setValue(searchTerm);
    console.log(`value after search is ${value}`);
  }
  return (
    <StyledForm action="" onSubmit={search}>
      <input type="text" placeholder="Search" onChange={handleInput} />
      <Link to={`/search/${searchTerm}`}>
        <button className="search-button">
          <SearchIcon />
        </button>
      </Link>
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
