import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./";
import "@testing-library/jest-dom/extend-expect";

describe("Header", () => {
  const contextValue = "elmo";
  beforeEach(() => render(<SearchBar />));

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
