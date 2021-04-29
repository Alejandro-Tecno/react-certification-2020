import React from "react";
import { StyledDropdown } from "./Dropdown.styled";
import { useTranslation } from "react-i18next";

function Dropdown({
  open,
  isAuthenticated,
  authenticated,
  internalLogout,
  logout,
  /* loginWithRedirect, */
}) {
  const { t } = useTranslation();

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
              {t("logOut")}
            </button>
          )}
          {authenticated && (
            <button className="logout" onClick={() => internalLogout()}>
              {t("logOut")}
            </button>
          )}
        </>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;
