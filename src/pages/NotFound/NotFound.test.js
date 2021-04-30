import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "./";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("NotFound", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  );
  it("Renders the Page succesfully", () => {});
  it("Contains the H1", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("lost");
  });

  it("Contains the button", () => {
    expect(screen.getByRole("button")).toHaveTextContent("backtoHome");
  });

  it("Contains the correct image", () => {
    expect(screen.getByRole("img")).toHaveProperty(
      "src",
      "http://localhost/404.png"
    );
  });
  it("The link goes to home", async () => {
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
