import React, { useContext } from "react";
import Card from "../Card/";
import styled from "styled-components";
import useFetch from "../../../components/Hooks/useFetch";
import UserContext from "../../../utils/UserContext";
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyAl-W9fExq-7Jn3lSj9ZxMcbME9w6tTWrY&channelId=UCyRhIGDUKdIOw07Pd8pHxCw&part=snippet,id&order=date&maxResults=1
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyAh804wIQFPN1dUELPIsYhULO5vU--W4_w&channelId=UCyRhIGDUKdIOw07Pd8pHxCw&part=snippet,id&order=date&maxResults=1

function CardList() {
  const { searchTerm } = useContext(UserContext);
  const data = useFetch(searchTerm);
  /*  const [data, setData] = useState(null);
  const [search, setSearch] = useState("elmo");
  const KEY = "AIzaSyAl-W9fExq-7Jn3lSj9ZxMcbME9w6tTWrY";
  const KEY2 = "AIzaSyAh804wIQFPN1dUELPIsYhULO5vU--W4_w";
  const channelID = "UCyRhIGDUKdIOw07Pd8pHxCw";
  const URL = "https://www.googleapis.com/youtube/v3/search?key=";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(
      `${URL}${KEY}&part=snippet,id&order=viewCount&q=${search}&type=video&maxResults=20`
    )
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  }; */

  return (
    <StyledCard data-testid="content_div">
      {data
        ? data.items
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
        : null}
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
export default CardList;
