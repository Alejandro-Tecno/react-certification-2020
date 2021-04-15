import Video from ".";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from ".";
import "@testing-library/jest-dom/extend-expect";
import { Router, withRouter, useRouteMatch } from "react-router-dom";
import { createMemoryHistory } from "history";

/* const loadData = jest.fn(() => {
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
}); */

describe("Video", () => {
  const history = createMemoryHistory();
  const route = "/wxMrtK-kYnE";
  history.push(route);
  it("Renders the loading text", () => {
    render(
      <Router history={history}>
        <Video />
      </Router>
    );
    /* expect(screen.getAllByText(/Loading/i)).toBeInTheDocument(); */
    expect(screen.getAllByText(/Loading/i)).toHaveLength(2);
  });

  /*   it("Renders correctly", async () => {
    render(
      <Router history={history}>
        <Video />
      </Router>
    );
    await screen.debug();
    await expect(screen.findByText(/Sesame/i)).toBeInTheDocument();
    expect(loadData).toHaveBeenCalled();
  }); */
});
