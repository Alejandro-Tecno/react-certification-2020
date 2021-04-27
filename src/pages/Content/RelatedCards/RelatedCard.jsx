import React from "react";
import {StyledLink, StyledCard} from "./RelatedCard.styled"

function RelatedCard({ image, title, id, location }) {
  return (
    <StyledLink to={location ? `/favorites/${id}` : `/video/${id}`}>
      <StyledCard data-testid="Relatedcard_div">
        <div className="video-image">
          <img data-testid="card_img" src={image} alt="title" />
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
/*  */
export default RelatedCard;
