import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import UserContext from "../../../../utils/UserContext";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledForm } from "./SearchBar.styled";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(UserContext);
  const [inputValue, setInputValue] = useState(searchTerm);
  const { t } = useTranslation();
  let history = useHistory();
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    history.push(`/search/${inputValue}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="form">
      <input
        data-testid="input"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInput}
      />

      <button className="search-button" type="submit" title={t("search")}>
        <SearchIcon />
      </button>
    </StyledForm>
  );
}

export default SearchBar;
