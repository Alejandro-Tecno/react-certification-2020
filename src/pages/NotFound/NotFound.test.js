import React from "react";
import { render, screen} from "@testing-library/react";
import NotFound from "./";
import { BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe("NotFound", () => {

    beforeEach( () => render(<BrowserRouter><NotFound /></BrowserRouter>))
    it("Renders the Page succesfully", () => {
      
    });
    it("Contains the H1", () => {
        expect(screen.getByRole("heading")).toHaveTextContent("Jhonny is lost :(");
    });

    it("Contains the button", () => {
        expect(screen.getByRole("button")).toHaveTextContent("Get me back to Home");
    });

    it("Contains the correct image", () => {
        expect(screen.getByRole("img")).toHaveProperty("src", "http://localhost/404.gif");
    })
});


