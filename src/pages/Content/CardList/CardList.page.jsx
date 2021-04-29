import React, { useContext } from "react";
import Card from "../Card/";
import useFetch from "../../../components/Hooks/useFetch";
import UserContext from "../../../utils/UserContext";
import { StyledCardList } from "./CardList.Styled";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../../components/providers/Auth";

function CardList() {
  const { searchTerm } = useContext(UserContext);
  const data = useFetch(searchTerm);

  const { isAuthenticated } = useAuth0();
  const { authenticated } = useAuth();

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
                video={video}
                isAuthenticated={isAuthenticated}
                authenticated={authenticated}
              />
            ))
        : null}
    </StyledCardList>
  );
}

export default CardList;
