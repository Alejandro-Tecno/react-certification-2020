import React from "react";
import Dropdown from "./Dropdown.component";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthProvider from "../providers/Auth";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("Dropdown", () => {
  const logout = jest.fn().mockImplementation(() => {});
  const internalLogout = jest.fn().mockImplementation(() => {});

  it("Renders the Auth0 logout Button correctly", () => {
    render(<Dropdown open={true} isAuthenticated={true} />);
    expect(screen.getByText(/logOut/)).toBeInTheDocument();
  });

  it("Renders the internal auth logout Button correctly", () => {
    render(<Dropdown open={true} authenticated={true} />);
    expect(screen.getByText(/logOut/)).toBeInTheDocument();
  });

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
    fireEvent.click(screen.getByText(/logOut/));
    expect(internalLogout).toHaveBeenCalled();
  });

  it("Logs out Correctly", () => {
    render(
      <AuthProvider>
        <Dropdown open={true} isAuthenticated={true} logout={logout} />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/logOut/));
    expect(logout).toHaveBeenCalled();
  });
});
