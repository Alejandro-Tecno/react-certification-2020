import React, { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import Card from "../Card/Card.component";

function SearchResults({ data }) {
  console.log(data);
  return (
    <StyledCard>
      {data ? (
        data.items
          .filter((video) => video.id.kind === "youtube#video")
          .map((video) => (
            <Card
              data-testid="card_div"
              image={video.snippet.thumbnails.high.url}
              key={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
            />
          ))
      ) : (
        <h2>No hay respuesta</h2>
      )}
    </StyledCard>
  );
}
const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 90vh;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-top: 65px;
`;

export default SearchResults;
