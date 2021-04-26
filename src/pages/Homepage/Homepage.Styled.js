import styled from "styled-components";
import device from "../../utils/breakpoints";



export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .recomended-text {
    font-size: 3rem;
    margin: 20px 0px 2px 30px;
    @media ${device.xs} {
    font-size:2rem;
    margin: 10px 0px 2px 10px;
  }
  }
`;


