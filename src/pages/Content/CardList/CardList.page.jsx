import React, { useContext } from "react";
import Card from "../Card/";
import styled from "styled-components";
import useFetch from "../../../components/Hooks/useFetch";
import UserContext from "../../../utils/UserContext";

function CardList() {
  const { searchTerm } = useContext(UserContext);
  const data = useFetch(searchTerm);

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
  justify-content: space-around;
  padding: 1rem 2rem;
  margin-top: 5px;
  text-decoration: none;
`;
export default CardList;
