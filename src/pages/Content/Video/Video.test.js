import Video from "./";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./";
import "@testing-library/jest-dom/extend-expect";
import { Router, withRouter, useRouteMatch } from "react-router-dom";
import { createMemoryHistory } from "history";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: {
          id: "testID",
          snippet: {
            title: "testTitle",
            description: "testDescription",
            thumbnails: { high: "testThumbnails" },
          },
        },
      }),
  });
});

describe("Video", () => {
  const history = createMemoryHistory();
  const route = "/whatever-the-route-is";
  history.push(route);
  beforeEach(() => render(<Video history={history} />));
  it("Gets the correct data", async () => {
    expect(fetch).toHaveBeenCalled();
  });

  it("Calls the handleSubmit function", () => {
    const handleSubmit = jest.fn();
    fireEvent.submit(screen.getByRole("textbox"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
