import Video from "./";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./";
import "@testing-library/jest-dom/extend-expect";
import { Router, withRouter, useRouteMatch } from "react-router-dom";
import { createMemoryHistory } from "history";

/* global.fetch = jest.fn(() => { */
const loadData = jest.fn(() => {
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
  /*   
   beforeEach(() => render(<Video history={history}  />));
  it("Gets the correct data", async () => {
    expect(loadData).toHaveBeenCalled();
  }); */
});
