import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../../utils/GlobalStateProvider";
import { Themes } from "../../../utils/themes";

describe("Header", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  );
  screen.debug();
  it("Renders the Header succesfully", () => {});
  it("Contains the user image", () => {
    expect(screen.getByRole("img")).toHaveProperty(
      "src",
      "https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
    );
  });
  it("Contains the search input", () => {
    expect(screen.queryByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
  it("Contains the Nav button", () => {
    expect(screen.getByTestId("nav_selector")).toBeInTheDocument();
  });
  it("Contains the dark mode button", () => {
    expect(screen.getByTestId("darkModeButton")).toBeInTheDocument();
  });
});
