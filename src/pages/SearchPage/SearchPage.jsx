import React, { useContext, useState } from "react";
import useFetch from "../../components/Hooks/useFetch";
import Card from "../Content/Card";
import styled from "styled-components";
import UserContext from "../../utils/UserContext";

function SearchPage({ searchTest, setSearchTest }) {
  const { value, setValue } = useContext(UserContext);
  console.log(value);
  const [datos, setdatos] = useState();
  const data = useFetch(value);

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
        <h2>null</h2>
      )}
      <h2>{value}</h2>
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

export default SearchPage;
