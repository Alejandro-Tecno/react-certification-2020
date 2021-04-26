import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../providers/GlobalState/GlobalStateProvider";
import UserContext from "../../utils/UserContext";
import { useAuth } from "../providers/Auth/Auth.provider";
import { useAuth0 } from "@auth0/auth0-react";
import {StyledOverlay,StyledForm} from "./Login.styled"

function Login() {
  const { state } = useContext(GlobalContext);
  const { loginWithRedirect } = useAuth0();
  const { modalOpen, setModalOpen } = useContext(UserContext);
  const { internalLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await internalLogin(username, password);
      setModalOpen(false);
    } catch (err) {
      console.log(err);
      setError("Wrong credentials");
    }
  };

  return (
    modalOpen &&
    ReactDom.createPortal(
      <>
        <StyledOverlay />
        <StyledForm isDark={state.isDark}>
          <h2>Log in</h2>
          <button className="close" onClick={() => setModalOpen(false)}>
            X
          </button>
          <form onSubmit={HandleLogin}>
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <div className="signWithgoogle">
            <p>or</p>
            <button onClick={() => loginWithRedirect()}>
              Sign in with Google
            </button>
          </div>
          {error && <span>{error}</span>}
        </StyledForm>
      </>,
      document.getElementById("portal")
    )
  );
}

export default Login;
