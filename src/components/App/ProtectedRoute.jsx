import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../providers/Auth";

function ProtectedRoute(props) {
  const { isAuthenticated } = useAuth0();
  const { authenticated } = useAuth();

  return authenticated ? (
    <Route {...props} />
  ) : isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to="/" />
  );
}

export default ProtectedRoute;
