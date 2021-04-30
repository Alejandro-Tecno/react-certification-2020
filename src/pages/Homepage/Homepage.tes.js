import Homepage from ".";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("App", () => {
  it("CardList is rendered", () => {
    render(<Homepage />);
    expect(screen.getByTestId("content_div")).toBeInTheDocument();
  });

  it("Renders Recommended videos", () => {
    render(<Homepage />);
    expect(screen.queryByText(/title/i)).toBeInTheDocument();
  });
});
