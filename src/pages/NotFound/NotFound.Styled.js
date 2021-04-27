import styled from "styled-components";
import device from "../../utils/breakpoints";

export const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  text-align:center;
  h1 {
    font-size: 4rem;
    @media ${device.xs} {
      font-size: 2rem;
      margin: 10px 0px 2px 10px;
      
    }
  }
  button {
    background: #384d5f;
    height: 3rem;
    font-size: 2rem;
    border-radius: 10px;
    padding: 5px;
    align-items: center;
    text-align: center;
    color: #f0f0f0;
    margin: 10px;

    &:hover {
      background: #6286a5;
      transform: scale(1.02);
    }
  }
  img {
    margin-top: 5rem;
    width: 30vw;
  }
`;
