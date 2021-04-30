import React, { useState, useContext, useCallback, useEffect } from "react";
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

const handleAuth = (key) => {
  try {
    const value = window.localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.error("Error");
    return null;
  }
};

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [internalUser, setInternalUser] = useState(null);

  useEffect(() => {
    const userState = handleAuth("savedUser");
    const userData = handleAuth("savedUserData");

    const userAuthenticated = Boolean(userState);

    setAuthenticated(userAuthenticated);
    setInternalUser(userData);
  }, []);

  const internalLogin = useCallback(async (username, password) => {
    const res = await loginApi(username, password);
    if (res) {
      setInternalUser(res);
      setAuthenticated(true);
      window.localStorage.setItem("savedUser", JSON.stringify(true));
      window.localStorage.setItem("savedUserData", JSON.stringify(res));
    }
  }, []);

  const internalLogout = useCallback(() => {
    setInternalUser(undefined);
    setAuthenticated(false);
    window.localStorage.setItem("savedUser", JSON.stringify(false));
    window.localStorage.removeItem("savedUserData");
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
