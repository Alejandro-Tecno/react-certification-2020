import React from "react";
import styled from "styled-components";
import RelatedCard from "../RelatedCards";
import device from "../../../utils/breakpoints";

function RelatedVideos({ relatedData }) {
  const location = window.location.pathname.includes("favorites");

  return (
    <StyledRelatedVideos>
      {location ? <h2>Favorite Videos</h2> : <h2>Related videos</h2>}
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
        <p>Loading</p>
      )}
    </StyledRelatedVideos>
  );
}

const StyledRelatedVideos = styled.div`
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

export default RelatedVideos;
