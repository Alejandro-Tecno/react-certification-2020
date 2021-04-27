import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  position: relative;
  border: 1px solid #3a3a53;
  border-radius: 5px;
  margin: 10px 10px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);

  }

  .video-image {
    height: 190px;
    width: 350px;
    border-radius: 5px 5px 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px 5px 0px 0px;
    }
  }
  .video-content {
    padding: 0rem 1rem;
    height: 150px;
    h2 {
      font-size: 1.2rem;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 3rem;
    }
    p {
      font-size: 0.8rem;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
