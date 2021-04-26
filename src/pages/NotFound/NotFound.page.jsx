import React from "react";
import { Link } from "react-router-dom";
import { StyledNotFound } from "./NotFound.Styled";


function NotFoundPage() {
  return (
    <StyledNotFound>
      <h1>It seems like you are lost :(</h1>
      <Link to="/" className="home-link">
        <button type="button">Get me back to Home</button>
      </Link>
      <img src="404.gif" alt="page not found" />
    </StyledNotFound>
  );
}

export default NotFoundPage;
