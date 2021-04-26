
import styled from "styled-components";
import { Themes } from "../../utils/themes";

export const StyledOverlay = styled.div`
z-index: 100;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.4);
`;
export const StyledForm = styled.div`
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
      filter: brightness(1.2);
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
.signWithgoogle {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    margin: 2px;
  }
  button {
    background: ${(props) =>
      props.isDark ? Themes.dark.headerColor : Themes.ligth.headerColor};
    text-align: center;
    padding: 3px;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.3rem;
    color: white;
    cursor: pointer;
    margin-top: 0px;
    &:hover {
      filter: brightness(1.2);
    }
  }
}
span {
  color: #a31616;
  font-size: 1rem;
}
`;
