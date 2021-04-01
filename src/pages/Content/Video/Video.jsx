import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import UserContext from "../../../utils/UserContext";
require("dotenv").config();

function Video() {
  const { id: videoId } = useParams();
  const { searchTerm } = useContext(UserContext);
  //fectch
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const KEY = process.env.REACT_APP_API_KEY3;
  const URL = "https://www.googleapis.com/youtube/v3/videos";

  useEffect(() => {
    if (!videoId) return;
    setLoading(true);
    loadData();
  }, [searchTerm]);
  //https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=Mq3WNqcwdv4&key=AIzaSyAl-W9fExq-7Jn3lSj9ZxMcbME9w6tTWrY
  const loadData = async () => {
    console.log(`${URL}?part=id%2C+snippet&id=${videoId}&key=${KEY}`);
    await fetch(`${URL}?part=id%2C+snippet&id=${videoId}&key=${KEY}`)
      .then((response) => response.json())
      .then((receivedData) => {
        setLoading(false);
        setData(receivedData);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
    console.log(data);
  };
  //fectch

  return (
    <>
      {data ? (
        <VideoContainer>
          <StyledVideo
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></StyledVideo>
          <h3>{data.items[0].snippet.title}</h3>
          <p>{data.items[0].snippet.description}</p>
        </VideoContainer>
      ) : (
        "Loading"
      )}
    </>
  );
}

const StyledVideo = styled.iframe`
  height: 70vh;
  width: 100%;
`;

const VideoContainer = styled.div`
  height: 90vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 1rem 2rem;
  overflow: hidden;
  p {
    white-space: pre-line;
    width: 100%;
    max-height: 20vh;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Video;
