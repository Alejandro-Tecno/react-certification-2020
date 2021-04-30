import React from "react";
import { render, screen } from "@testing-library/react";
import FavoritesProvider from "./FavoritesProvider";
import "@testing-library/jest-dom/extend-expect";

const children = <h1>Children</h1>;
describe("Favorites provider", () => {
  it("renders correctly", () => {
    render(<FavoritesProvider>{children}</FavoritesProvider>);
    screen.debug();

    expect(screen.getByRole("heading")).toHaveTextContent("Children");
  });
});
