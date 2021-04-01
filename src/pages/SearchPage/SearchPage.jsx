import React, { useContext, useState, useEffect } from "react";
import useFetch from "../../components/Hooks/useFetch";
import Card from "../Content/Card";
import styled from "styled-components";
import UserContext from "../../utils/UserContext";
import SearchResults from "../Content/SearchResults/SearchResults";
require("dotenv").config();

function SearchPage() {
  const { searchTerm } = useContext(UserContext);
  const data = useFetch(searchTerm);

  /*  const [data, setData] = useState(null);
  const KEY = process.env.REACT_APP_API_KEY;
  const URL = "https://www.googleapis.com/youtube/v3/search?key=";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log(
      `${URL}${KEY}&part=snippet,id&order=viewCount&q=${searchTerm}&type=video&maxResults=20`
    );
    await fetch(
      `${URL}${KEY}&part=snippet,id&order=viewCount&q=${searchTerm}&type=video&maxResults=20`
    )
      .then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  }; */
  //test

  return (
    <div>
      {/*  {data ? <SearchResults data={data} /> : <h2>Wrong</h2>} */}
      <StyledCard>
        <h2>Search page</h2>
        {data ? (
          data.items
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
        ) : (
          <h2>null</h2>
        )}
      </StyledCard>
    </div>
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
