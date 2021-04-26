import { Themes } from "../../../utils/themes";
import device from "../../../utils/breakpoints";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
position: sticky;
top: 0;
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
height: 60px;
background: ${(props) =>
  props.isDark ? Themes.dark.headerColor : Themes.ligth.headerColor};
align-items: center;
z-index: 100;

button {
  margin: 0px 10px;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media ${device.xs}  {
    margin: 0px 4px;
  }
}
.favorites-selector,
.home-selector {
  align-items: flex-start;
  background: none;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 2.5rem;
  flex: 1;
  margin-left: 1rem;
  @media ${device.xs}  {
    margin-left: 1px !important;
  }
}


form {
  height: 60px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  max-width: 28vw;
  margin-left: 2rem;
  transition: all 0.6s ease-in-out;
  &:focus {
    max-width: 40vw;
  }
  &:hover {
    max-width: 40vw;
    input {
      background: #cddff0;
      width: 38vw;
    }
  }

  input {
    border: none;
    background: #bad7ee;
    height: 30px;
    border-radius: 3px;
    width: 26vw;
    box-sizing: border-box;
    padding: 2px 10px;
    font-size: 1rem;
    transition: all 0.6s ease-in-out;
    &:focus {
      border: none;
      background: #cddff0;
      width: 38vw;
    }
  }
}
`;


export const StyledRigth = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex: 1;
margin-right: 1rem;
font-size: 1.5rem !important;
@media ${device.xs}  {
  margin-right: 5px;
}
span {
  font-size: 0.7rem;
  color: white;
}
.user {
  display: flex;
  align-items: center;
}
img {
  border-radius: 50%;
  height: 40px;
  margin-right: 1rem;
  @media ${device.xs}  {
    margin-right: 5px;
  }
}
img:hover {
  border: 2px solid #bebebe;
}
`;

export const StyledLeft = styled.div`
display: flex;
flex-direction: table-row;
align-items: center;
`;

export const StyledDarkModeSelector = styled.button`
margin-right: 15px;
font-size: 1.5rem;
color: white;
display: flex;
background: transparent;
border: none;
`;

