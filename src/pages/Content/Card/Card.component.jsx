import React from "react";
import {StyledLink, StyledCard } from "./Card.Styled"

function Card({ image, title, description, id }) {
  return (
    <StyledLink to={`/video/${id}`}>
      <StyledCard data-testid="card_div">
        <div className="video-image" data-testid="video-image">
          <img data-testid="card_img" src={image} alt="" />
        </div>
        <div className="video-content">
          <h2 data-testid="card_h2">
            {title
              .replace(/&#39;/g, "'")
              .replace(/&quot;/g, "'")
              .replace(/&amp;/g, "&")}
            ;
          </h2>
          <p data-testid="video_description">{description}</p>
        </div>
      </StyledCard>
    </StyledLink>
  );
}

export default Card;
