import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import GlobalStateProvider, {
  ThemeContext,
} from "../../../components/providers/GlobalState/GlobalStateProvider";
import { Themes } from "../../../utils/themes";

describe("Header", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <GlobalStateProvider>
          <Header />
        </GlobalStateProvider>
      </BrowserRouter>
    )
  );

  it("Renders the Header succesfully", () => {});
  it("Contains the user image", () => {
    expect(screen.getByRole("img")).toHaveProperty(
      "src",
      "https://i.imgur.com/Cndlg8Q.png"
    );
  });
  it("Contains the search input", () => {
    expect(screen.queryByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
  it("Contains the Nav button", () => {
    expect(screen.getByTestId("home_selector")).toBeInTheDocument();
  });
  it("Contains the dark mode button", () => {
    expect(screen.getByTestId("darkModeButton")).toBeInTheDocument();
  });
  it("Changes to Dark Mode", () => {
    const DarkModeButton = screen.getByTestId("darkModeButton");
    fireEvent.click(DarkModeButton);
    expect(screen.getByTestId("Header")).toHaveStyle("background: #32383d");
  });
});
