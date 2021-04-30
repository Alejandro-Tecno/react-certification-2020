import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../providers/GlobalState/GlobalStateProvider";
import UserContext from "../../utils/UserContext";
import { useAuth } from "../providers/Auth/Auth.provider";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledOverlay, StyledForm } from "./Login.styled";
import { useTranslation } from "react-i18next";

function Login() {
  const { state } = useContext(GlobalContext);
  const { loginWithRedirect } = useAuth0();
  const { modalOpen, setModalOpen } = useContext(UserContext);
  const { internalLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { t } = useTranslation();

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
          <h2>{t("logIn")}</h2>
          <button className="close" onClick={() => setModalOpen(false)}>
            X
          </button>
          <form onSubmit={HandleLogin}>
            <label htmlFor="username">{t("username")}</label>
            <input
              required
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">{t("password")}</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{t("logIn")}</button>
          </form>
          <div className="signWithgoogle">
            <p>{t("or")}</p>
            <button onClick={() => loginWithRedirect()}>
              {t("signInGoogle")}
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
