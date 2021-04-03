import Homepage from "./";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("CardList is rendered", () => {
    render(<Homepage />);
    expect(screen.getByTestId("content_div")).toBeInTheDocument();
  });

  it("Renders Recommended videos", () => {
    render(<Homepage />);
    expect(screen.queryByText(/Recommended videos/i)).toBeInTheDocument();
  });
});
