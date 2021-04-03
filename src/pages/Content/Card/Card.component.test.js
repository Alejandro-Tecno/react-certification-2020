import React from "react";
import Card from "./";
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Card creator", () => {
  it("Renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Card
            image="https://i.ytimg.com/vi/zClI9OjgKXM/hqdefault.jpg"
            title="Video&#39;1"
            description="testDescription"
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
        <Card
          image="https://i.ytimg.com/vi/zClI9OjgKXM/hqdefault.jpg"
          title="Video&#39;1"
          description="testDescription"
        />
      </BrowserRouter>
    );
    // Check if the elements rendered are the expected
    expect(getByTestId("video_description")).toBeInTheDocument();
    expect(getByTestId("video_description")).toHaveTextContent(
      "testDescription"
    );
    expect(getByTestId("card_h2")).toHaveTextContent("Video'1");
    expect(getByRole("img")).toHaveProperty(
      "src",
      "https://i.ytimg.com/vi/zClI9OjgKXM/hqdefault.jpg"
    );
  });
});
