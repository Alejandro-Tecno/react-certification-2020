import styled from "styled-components";
import device from "../../../utils/breakpoints";



export const StyledRelatedVideos = styled.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.4;
  h2 {
    margin-left: 1rem;
  }

  @media ${device.sm} {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
`;


