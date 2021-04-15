import React, { useState, useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom/extend-expect";
import { useHistory, BrowserRouter } from "react-router-dom";
import { Router, withRouter, useRouteMatch } from "react-router-dom";
import { createMemoryHistory } from "history";
import UserContext from "../../../../utils/UserContext";
import { handleSubmit } from "./";

describe("Header", () => {
  const contextValue = "elmo";
  beforeEach(() =>
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    )
  );

  it("Contains the input", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("Contains the search button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Can write on the search bar", () => {
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(screen.getByRole("textbox").value).toContain("test");
  });

  /*   it("Calls the handleSubmit function", () => {
    const handleSubmit = jest.fn();
    fireEvent.submit(screen.getByRole("textbox"));
    expect(handleSubmit).toHaveBeenCalled();
  }); */
});

describe("Calls the handleSubmit function", () => {
  const history = createMemoryHistory();
  const route = "/search/test";
  history.push(route);
  const handleSubmit = jest.fn();
  const setSearchterm = jest.fn();
  beforeEach(() =>
    render(
      <Router history={history}>
        <UserContext.Provider value={setSearchterm}>
          <SearchBar handleSubmit={handleSubmit} />
        </UserContext.Provider>
      </Router>
    )
  );

  /* it("Submiting info function is working", () => {
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    fireEvent.submit(screen.getByRole("textbox"));
    expect(handleSubmit).toHaveBeenCalled();
  }); */
});
