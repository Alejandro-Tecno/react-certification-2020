import App from "./";
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe("App", () => {
  it("Renders the cards succesfully", () => {
    render(<App />);
    expect(screen.getAllByTestId("card_div").length).toBe(24);
  });

  it("Doesn´t render the Wizeline channel info", () => {
    render(<App />);
    //check if the channel description is in the screen
    expect(
      screen.queryByText(/Wizeline transforms how teams build technology/i)
    ).toBeNull();
  });
});
