import React, { useContext, useState } from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
import { ThemeContext } from "../../utils/GlobalStateProvider";
import { Themes } from "../../utils/themes";
import UserContext from "../../utils/UserContext";
import loginApi from "../../utils/login.api";

function Login() {
  const { state } = useContext(ThemeContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { modalOpen, setModalOpen, isLogged, setIsLogged } = useContext(
    UserContext
  );
  const [user, SetUser] = useState(null);

  const HandleLogin = () => {
    loginApi();
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
            <label for="username">Username</label>
            <input
              required
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label for="password">Password</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Log in</button>
          </form>
        </StyledForm>
      </>,
      document.getElementById("portal")
    )
  );
}

const StyledOverlay = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
const StyledForm = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.3rem;
  align-items: center;
  background: ${(props) =>
    props.isDark ? Themes.dark.loginColor : Themes.ligth.loginColor};
  color: ${(props) => (props.isDark ? Themes.dark.font : Themes.ligth.font)};

  h2 {
    margin-top: 1px;
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.isDark ? Themes.dark.font : Themes.ligth.font)};
    button {
      background: ${(props) =>
        props.isDark ? Themes.dark.headerColor : Themes.ligth.headerColor};
      text-align: center;
      padding: 3px;
      width: 50%;
      border-radius: 5px;
      padding: 7px;
      font-size: 1.3rem;
      color: white;
      cursor: pointer;
      margin-top: 5px;
      &:hover {
        background: #576c8b;
      }
    }
  }

  input {
    margin: 5px;
    padding: 7px;
    font-size: 1.3rem;
  }

  .close {
    background: #b83030;
    color: #fff;
    position: absolute;
    right: 3%;
    top: 3%;
    padding: 6px;
    border-radius: 5px;
    font-weight: bolder;
  }
`;

export default Login;
