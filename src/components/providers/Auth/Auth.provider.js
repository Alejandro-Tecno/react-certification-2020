import React, { useState, useContext, useCallback } from "react";
import loginApi from "../../../utils/login.api";

const AuthContext = React.createContext({
  internalLogin: () => {},
  internalLogout: () => {},
  authenticated: false,
  internalUser: null,
});

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without and AuthProvider`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [internalUser, setInternalUser] = useState(null);

  const internalLogin = useCallback(async (username, password) => {
    console.log(username, password);
    const res = await loginApi(username, password);
    console.log(res);
    if (res) {
      setInternalUser(res);
      setAuthenticated(true);
    }
  }, []);

  const internalLogout = useCallback(() => {
    setInternalUser(undefined);
    setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ authenticated, internalUser, internalLogin, internalLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
