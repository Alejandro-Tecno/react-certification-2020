import styled from "styled-components";

export const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 4rem;
  }
  button {
    background: #384d5f;
    height: 3rem;
    font-size: 2rem;
    border-radius: 10px;
    padding: 5px;
    align-items:center;
    text-align: center;
    color: #f0f0f0;
    
    &:hover {
      background: #6286a5;
      transform: scale(1.02);
    }
  }
`;
