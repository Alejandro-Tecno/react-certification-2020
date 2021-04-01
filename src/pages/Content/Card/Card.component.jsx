import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ image, title, description, id }) {
  return (
    <StyledLink to={`/video/${id}`}>
      <StyledCard data-testid="card_div">
        <div className="video-image">
          <img data-testid="card_img" src={image} alt="" />
        </div>
        <div className="video-content">
          <h2 data-testid="card_h2">
            {title.replace(/&#39;/, "'").replace(/&amp;/, "&")}
          </h2>
          <p data-testid="card_p">{description}</p>
        </div>
      </StyledCard>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;

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
  flex-direction: column;
  width: 350px;
  align-items: center;
  background: #ffffff;
  position: relative;
  border: 1px solid #e7e5e5;
  border-radius: 5px;
  margin: 10px 10px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.016),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.116),
      -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
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
    }
  }
  .video-content {
    padding: 0rem 1rem;
    height: 150px;
    h2 {
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 3rem;
    }
    p {
      font-size: 0.8rem;
      color: #403d4e;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default Card;
