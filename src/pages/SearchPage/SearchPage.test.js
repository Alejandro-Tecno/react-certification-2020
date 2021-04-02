import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchPage from "./";
import "@testing-library/jest-dom/extend-expect";

describe("SearchPage renders correctly", () => {
  beforeEach(() => render(<SearchPage />));

  it("Contains the Search results text", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Search results");
  });
});
