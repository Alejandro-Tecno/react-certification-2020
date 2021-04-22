import AuthProvider from "./Auth.provider";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("AuthProvider", () => {
  it("render childrens correctly", () => {
    render(
      <AuthProvider>
        <p>Test</p>
        <div>testDiv</div>
      </AuthProvider>
    );
    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });
});
