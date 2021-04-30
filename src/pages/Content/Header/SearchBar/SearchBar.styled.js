import styled from "styled-components";

export const StyledForm = styled.form`
  height: 60px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  max-width: 28vw;
  margin-left: 2rem;
  @media (max-width: 500px) {
    margin-left: 5px !important;
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
    &:focus {
      border: none;
    }
    &:hover {
      background: #cddff0;
    }
  }
  button {
    background: none;
    color: white;
    border: none;
  }
`;
