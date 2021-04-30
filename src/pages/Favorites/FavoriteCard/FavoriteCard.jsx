import React from "react";
import StarIcon from "@material-ui/icons/Star";
import {StyledCardHolder,StyledLink,StyledCard} from "./FavoriteCard.styled";
import { useTranslation } from "react-i18next";

function FavoriteCard({ id, description, image, title, removeVideo }) {
  const { t } = useTranslation();
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
                .replace(/&#39;/g, "'")
                .replace(/&quot;/g, "'")
                .replace(/&amp;/g, "&")}
            </h2>
            <p>{description}</p>
          </div>
        </StyledCard>
      </StyledLink>
      <button onClick={() => removeVideo()}>
        <span>{t("remove")}</span>
        <StarIcon />
      </button>
    </StyledCardHolder>
  );
}


export default FavoriteCard;
