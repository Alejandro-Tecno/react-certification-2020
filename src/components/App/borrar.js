import React, { useState } from "react";

function login() {
  const [input, setInput] = useState(null);
  const [inputValue, setInputValue] = useState(searchTerm);
  const handleSubmit = () => {
    setInput(value);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    history.push(`/search/${inputValue}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInput}
        />
        <button className="search-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default login;
