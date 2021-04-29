import Login from "./Login.component";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserContext from "../../utils/UserContext";
import ReactDom from "react-dom";
import { act } from "react-dom/test-utils";
import GlobalStateProvider from "../providers/GlobalState/GlobalStateProvider";
import { useTranslation } from "react-i18next";
import { useAuth } from "../providers/Auth/Auth.provider";
/* import * as HandleLogin from "./Login.component"; */
/* import HandleLogin from "./Login.component" */
/* const mockedLoginWithRedirect = () => jest.fn();

jest.mock("../providers/Auth/Auth.provider", () =>{
useAuth: () =>{
  loginWithRedirect: mockedLoginWithRedirect
}
}) */

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

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

    expect(screen.getByRole("heading")).toHaveTextContent(/logIn/);
    expect(screen.getByText(/username/)).toBeInTheDocument();
    expect(screen.getByText(/password/)).toBeInTheDocument();
    expect(screen.getByText(/X/)).toBeInTheDocument();
    expect(screen.getByText(/signInGoogle/)).toBeInTheDocument();
  });

  it("Can write the username and password", () => {
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
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(screen.getByRole("textbox").value).toContain("test");
    /* fireEvent.submit(screen.getByRole("textbox"));
    expect(HandleLoginMocked).toHaveBeenCalled(); */
  });

  /*   it("calls the login function", () => {
    const modalOpen = true;
    const loginWithRedirect = jest.fn().mockImplementation();
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "portal");
    document.body.append(modalRoot);
    const HandleLoginMocked = jest.fn(() => console.log("called"));
    const setModalOpenMock = jest.fn(() => console.log("called"));
    Login.prototype.handleSubmit = HandleLoginMocked;
      render(
        <GlobalStateProvider>
          <UserContext.Provider value={{ modalOpen, loginWithRedirect }}>
            <Login HandleLogin={HandleLoginMocked} />
          </UserContext.Provider>
        </GlobalStateProvider>
      );
      fireEvent.submit(screen.getByRole("textbox"));
    expect(HandleLoginMocked).toHaveBeenCalled();
  }); */

  /* it("Logs with Google", () => {
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
    expect(HandleLoginMocked).toHaveBeenCalled();
  }); */
});
