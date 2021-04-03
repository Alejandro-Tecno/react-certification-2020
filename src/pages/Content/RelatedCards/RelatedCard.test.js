import React from "react";
import RelatedCard from "./";
import reactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("RelatedCard creator", () => {
  it("Renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <RelatedCard
            image="https://test-image.jpg"
            title="testVideo"
            id="123"
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders the H2 and p tags correctly", () => {
    // Initializes variables
    const { getByTestId, getByRole } = render(
      <BrowserRouter>
        <RelatedCard
          image="https://test-image.jpg"
          title="testVideo"
          id="123"
        />
      </BrowserRouter>
    );
    // Check if the elements rendered are the expected
    expect(getByTestId("card_title")).toBeInTheDocument();
    expect(getByTestId("card_title")).toHaveTextContent("testVideo");
    expect(getByRole("img")).toHaveProperty("src", "https://test-image.jpg/");
  });
});
