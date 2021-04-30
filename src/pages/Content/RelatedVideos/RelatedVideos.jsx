import React from "react";
import RelatedCard from "../RelatedCards";
import {StyledRelatedVideos} from "./RelatedVideos.styled"
import { useTranslation } from "react-i18next";

function RelatedVideos({ relatedData }) {
  const { t } = useTranslation();
  const location = window.location.hash.includes("favorites");


  return (
    <StyledRelatedVideos>
      {location ? <h2>{t("favoriteVideos")}</h2> : <h2>{t("relatedVideos")}</h2>}
      {relatedData.items ? (
        relatedData.items
          .filter((item) => item.snippet !== undefined)
          .map((video) => (
            <RelatedCard
              data-testid="RelatedCard"
              image={video.snippet.thumbnails.high.url}
              key={video.id.videoId}
              id={video.id.videoId}
              title={video.snippet.title}
            />
          ))
      ) : relatedData ? (
        relatedData
          .filter((item) => item.snippet !== undefined)
          .map((video) => (
            <RelatedCard
              data-testid="RelatedCard"
              image={video.snippet.thumbnails.high.url}
              key={video.id}
              id={video.id}
              title={video.snippet.title}
              location={location}
            />
          ))
      ) : (
        <p>{t("loading")}</p>
      )}
    </StyledRelatedVideos>
  );
}

export default RelatedVideos;
