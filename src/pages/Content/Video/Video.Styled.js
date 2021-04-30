import styled from "styled-components";
import device from "../../../utils/breakpoints";

export const StyledVideoPage = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-scrollbar {
    display: none;
  }
  overflow: hidden;
  @media ${device.sm} {
    flex-direction: column;
    overflow: scroll;
  }
`;

export const StyledVideoView = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.sm} {
  }
`;
export const StyledVideoDetails = styled.div`
  padding: 0px 10px;
  display: -webkit-box;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  h3 {
    width: 80%;
    margin: 6px 1px;
    font-size: 1.5em;
  }
`;

export const StyledVideo = styled.iframe`
  width: 100%;
  border: 1px solid #302f2f;
  height: 50vh;
    @media (min-width: 600px) {
    height: 450px;
  }
  @media (min-width: 1440px) {
    height: 600px;
  }
 
  @media (max-width: 600px) {
      height: calc(100vw * 0.6);
  }

`;

export const StyledVideoContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding: 1rem 2rem;
  overflow: hidden;
  overflow-y: hidden;
  @media ${device.sm} {
    width: 100%;
    margin-right: 10px;
    padding: 0.5rem 0.1rem;
    flex: 1;
  }
  h3 {
    margin: 3px 1px;
  }
  p {
    margin-top: 1px;
    white-space: pre-line;
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #384d5f;
    color: white;
    width: auto;
    margin: 10px;
    padding: 5px 10px !important;
    align-self: center;
    border-radius: 10px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background: #56718a;
    }
  }
`;
