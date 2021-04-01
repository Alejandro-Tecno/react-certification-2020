import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card/Card.component";

function SearchResults({ data }) {
  return (
    <StyledCardList data-testid="content_div">
      {data
        ? data.items
            .filter((video) => video.id.kind === "youtube#video")
            .map((video) => (
              <Card
                data-testid="card_div"
                image={video.snippet.thumbnails.high.url}
                key={video.id.videoId}
                id={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
              />
            ))
        : null}
    </StyledCardList>
  );
}

const StyledCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 90vh;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-top: 65px;
  text-decoration: none;
`;

export default SearchResults;
