import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../../../utils/breakpoints";

function RelatedCard({ image, title, id }) {
  return (
    <StyledLink to={`/video/${id}`}>
      <StyledCard data-testid="Relatedcard_div">
        <div className="video-image">
          <img data-testid="card_img" src={image} alt="" />
        </div>
        <div className="video-content">
          <p data-testid="card_title">
            {title.replace(/&#39;/, "'").replace(/&amp;/, "&")}
          </p>
        </div>
      </StyledCard>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 5px 12px;
  max-height: 18vh;
  width: 98%;
  display: flex;
  justify-content: center;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
  width: 100%;
  align-items: center;
  /* background: #ffffff; */
  position: relative;
  border: 1px solid #474747;
  border-radius: 5px;
  margin: 1px 5px;
  text-decoration: none;
  height: 15vh;
  transition: all 0.3s ease-in-out;
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.016),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.1);
  /* &:hover {
    transform: scale(1.02);
    box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.116),
      -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  } */

  .video-image {
    height: 150px;
    flex: 1;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .video-content {
    padding: 0.2rem 0.1rem;
    flex: 1;
    margin: 0px 5px;

    p {
      font-size: 1.1rem;
      text-decoration: none;
      /*  color: black; */
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 1px;
      max-height: 14vh;
      font-weight: 600;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
  @media ${device.sm} {
    display: flex;
    flex-direction: row;
    /* max-width: 40vw; */
  }
  @media ${device.xs} {
    display: flex;
    flex-direction: row;
    width: 80vw;
  }
`;

export default RelatedCard;
