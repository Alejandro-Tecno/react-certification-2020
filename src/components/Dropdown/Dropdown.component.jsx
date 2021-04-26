import React from "react";
import {StyledDropdown} from "./Dropdown.styled"

function Dropdown({
  open,
  isAuthenticated,
  authenticated,
  internalLogout,
  logout,
  /* loginWithRedirect, */
}) {
  return (
    <StyledDropdown>
      {open && (
        <>
          {/* {!isAuthenticated && !authenticated && (
            <button className="login" onClick={() => loginWithRedirect()}>
              Log in
            </button>
          )} */}
          {isAuthenticated && (
            <button className="logout" onClick={() => logout()}>
              Log out
            </button>
          )}
          {authenticated && (
            <button className="logout" onClick={() => internalLogout()}>
              Log out
            </button>
          )}
        </>
      )}
    </StyledDropdown>
  );
}


export default Dropdown;
