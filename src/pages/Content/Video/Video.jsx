import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import breakpoint from "../../../utils/breakpoints";
import { InsertChartOutlinedSharp } from "@material-ui/icons";

require("dotenv").config();

function Video() {
  const { id: videoId } = useParams();

  //fectch
  const [data, setData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const KEY = process.env.REACT_APP_API_KEY3;
  const URL = "https://www.googleapis.com/youtube/v3/";

  useEffect(() => {
    if (!videoId) return;
    setLoaded(false);
    loadRelatedVideos();
    loadData();
  }, [videoId]);

  const loadData = async () => {
    console.log(
      `Own data video URL: ${URL}videos?part=id%2C+snippet&id=${videoId}&key=${KEY}`
    );
    await fetch(`${URL}videos?part=id%2C+snippet&id=${videoId}&key=${KEY}`)
      .then((response) => response.json())
      .then((receivedData) => {
        setData(receivedData);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const loadRelatedVideos = async () => {
    console.log(
      `related videos URL: ${URL}search?part=id%2C+snippet&relatedToVideoId=${videoId}&key=${KEY}&order=viewCount&type=video&maxResults=5`
    );
    await fetch(
      `${URL}search?part=id%2C+snippet&relatedToVideoId=${videoId}&key=${KEY}&order=viewCount&type=video&maxResults=7`
    )
      .then((response) => response.json())
      .then((receivedData) => {
        setRelatedData(receivedData);
        setLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setLoaded(true);
      });
  };
  //fectch

  return (
    <StyledVideoPage>
      {data ? (
        <StyledVideoContainer>
          <StyledVideoView>
            <StyledVideo
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              frameborder="0"
            ></StyledVideo>
          </StyledVideoView>
          <StyledVideoDetails>
            <h3>{data.items[0].snippet.title}</h3>
            <p>{data.items[0].snippet.description}</p>
          </StyledVideoDetails>
        </StyledVideoContainer>
      ) : (
        "Loading"
      )}
      {relatedData && loaded ? (
        <RelatedVideos relatedData={relatedData} />
      ) : (
        <p>Loading</p>
      )}
    </StyledVideoPage>
  );
}

const StyledVideoPage = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  @media ${breakpoint.device.sm} {
    flex-direction: column;
    overflow: scroll;
  }
`;

const StyledVideoView = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakpoint.device.sm} {
  }
`;
const StyledVideoDetails = styled.div`
  padding: 0px 10px;
  display: -webkit-box;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  h3 {
    margin: 6px 1px;
  }
  /* @media (max-width: 768px) {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  } */
`;
const StyledVideo = styled.iframe`
  width: 100%;
  height: 50vh;
  @media (min-width: 768px) {
    height: 450px;
  }
  @media (min-width: 1440px) {
    height: 600px;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
`;

const StyledVideoContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 90vh;
  padding: 1rem 2rem;
  overflow: hidden;
  overflow-y: hidden;
  @media ${breakpoint.device.sm} {
    width: 100%;
    margin-right: 10px;
    padding: 0.5rem 0.1rem;
    flex: 1;
  }
  h3 {
    margin: 3px 1px;
  }
  p {
    margin-top: 1px;
    white-space: pre-line;
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export default Video;
