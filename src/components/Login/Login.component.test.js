import Login from "./Login.component";
import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserContext from "../../utils/UserContext";
import ReactDom from "react-dom";
import GlobalStateProvider from "../providers/GlobalState/GlobalStateProvider";

describe("Login", () => {
  it("Renders the Login correctly", () => {
    const modalOpen = true;
    const loginWithRedirect = jest.fn().mockImplementation();
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "portal");
    document.body.append(modalRoot);

    render(
      <GlobalStateProvider>
        <UserContext.Provider value={{ modalOpen, loginWithRedirect }}>
          <Login />
        </UserContext.Provider>
      </GlobalStateProvider>
    );

    expect(screen.getByText(/Log in/)).toBeInTheDocument();
    expect(screen.getByText(/Username/)).toBeInTheDocument();
    expect(screen.getByText(/Password/)).toBeInTheDocument();
    expect(screen.getByText(/X/)).toBeInTheDocument();
    expect(screen.getByText(/Google/)).toBeInTheDocument();
  });
});
