import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

function Dropdown({ open }) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <StyledDropdown>
      {open && (
        <>
          {!isAuthenticated && (
            <button className="login" onClick={() => loginWithRedirect()}>
              Log in
            </button>
          )}
          {isAuthenticated && (
            <button className="logout" onClick={() => logout()}>
              Log out
            </button>
          )}
        </>
      )}
    </StyledDropdown>
  );
}

const StyledDropdown = styled.div`
  background: #384d5f;
  position: absolute;
  top: 50px;
  width: 100px;
  border-radius: 5px;
  transform: translateX(-55%);
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 20px black;

  button {
    background: #384d5f;
    border: none;
    color: white !important;
    padding: 10px 0px;
    margin: 0px;
    font-size: 1.2rem;

    &:hover {
      background: #556877;
    }
  }
`;

export default Dropdown;
