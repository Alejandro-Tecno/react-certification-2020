import React from "react";
import styled from "styled-components";
import RelatedCard from "../RelatedCards";
import breakpoint from "../../../utils/breakpoints";

function RelatedVideos({ relatedData }) {
  return (
    <StyledRelatedVideos>
      <h2>Related videos</h2>
      {relatedData ? (
        relatedData.items
          .slice(2)
          .map((video) => (
            <RelatedCard
              data-testid="RelatedCard"
              image={video.snippet.thumbnails.high.url}
              key={video.id.videoId}
              id={video.id.videoId}
              title={video.snippet.title}
            />
          ))
      ) : (
        <p>Loading</p>
      )}
    </StyledRelatedVideos>
  );
}

const StyledRelatedVideos = styled.div`
  height: 90vh;
  overflow-y: scroll;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.4;

  @media ${breakpoint.device.sm} {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    justify-content: space-around;
  }
`;

export default RelatedVideos;
