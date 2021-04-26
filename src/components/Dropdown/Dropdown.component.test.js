import React from "react";
import Dropdown from "./Dropdown.component";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthProvider from "../providers/Auth";

describe("Dropdown", () => {
  /* const loginWithRedirect = jest.fn().mockImplementation(() => {}); */
  const logout = jest.fn().mockImplementation(() => {});
  const internalLogout = jest.fn().mockImplementation(() => {});

  /* it("Renders the Login Button correctly", () => {
    render(<Dropdown open={true} />);

    expect(screen.getByText(/Log in/)).toBeInTheDocument();
  }); */

  it("Renders the Auth0 logout Button correctly", () => {
    render(<Dropdown open={true} isAuthenticated={true} />);
    expect(screen.getByText(/Log out/)).toBeInTheDocument();
  });

  it("Renders the internal auth logout Button correctly", () => {
    render(<Dropdown open={true} authenticated={true} />);
    expect(screen.getByText(/Log out/)).toBeInTheDocument();
  });

  /* it("Logs with Auth0", () => {
    render(
      <AuthProvider>
        <Dropdown
          open={true}
          isAuthenticated={false}
          authenticated={false}
          loginWithRedirect={loginWithRedirect}
        />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/Log in/));
    expect(loginWithRedirect).toHaveBeenCalled();
  }); */

  it("Logs out Correctly", () => {
    render(
      <AuthProvider>
        <Dropdown
          open={true}
          authenticated={true}
          internalLogout={internalLogout}
        />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/Log out/));
    expect(internalLogout).toHaveBeenCalled();
  });

  it("Logs out Correctly", () => {
    render(
      <AuthProvider>
        <Dropdown open={true} isAuthenticated={true} logout={logout} />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/Log out/));
    expect(logout).toHaveBeenCalled();
  });
});
