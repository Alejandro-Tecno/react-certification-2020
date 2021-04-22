import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { useFavorites } from "../../../components/providers/Favorites";

function FavoriteCard({ id, description, image, title, removeVideo }) {
  return (
    <StyledCardHolder>
      <StyledLink to={`/favorites/${id}`}>
        <StyledCard>
          <div className="favorite-image">
            <img src={image} alt={title} />
          </div>
          <div className="favorite-content">
            <h2>
              {title
                .replace(/&#39;/, "'")
                .replace(/&quot;/, "'")
                .replace(/&amp;/, "&")}
            </h2>
            <p>{description}</p>
          </div>
        </StyledCard>
      </StyledLink>
      <button onClick={() => removeVideo()}>
        <span>Remove</span>
        <StarIcon />
      </button>
    </StyledCardHolder>
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

const StyledCardHolder = styled.div`
  position: relative;
  &:hover button {
    display: flex !important;
  }
  button {
    cursor: pointer;
    display: none;
    z-index: 99;
    color: white;
    background: #d60e0e;
    position: absolute;
    top: 5%;
    right: 5%;
    padding: 5px;
    font-size: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 0 20px black;
    justify-content: space-around;
    align-items: center;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  /* background: #ffffff; */
  position: relative;
  border: 1px solid #3a3a53;
  border-radius: 5px;
  margin: 10px 10px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  /* box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.016),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.1); */
  &:hover {
    transform: scale(1.02);
  }

  /* box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.116),
      -12px -12px 24px 0 rgba(255, 255, 255, 0.5); */

  .favorite-image {
    height: 190px;
    width: 350px;
    border-radius: 5px 5px 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px 5px 0px 0px;
    }
  }
  .favorite-content {
    box-sizing: border-box;
    padding: 0rem 1rem;
    height: 150px;
    width: 100%;
    padding: 0px 10px;
    h2 {
      font-size: 1.2rem;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 3rem;
      margin: 5px 0px;
    }
    p {
      margin: 5px 0px;

      font-size: 1rem;
      -webkit-line-clamp: 4;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      line-height: 1.2rem;
      max-height: 4.8rem;
    }
  }
`;

export default FavoriteCard;
