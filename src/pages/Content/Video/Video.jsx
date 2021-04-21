import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import device from "../../../utils/breakpoints";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../../components/providers/Auth";
import StarIcon from "@material-ui/icons/Star";
require("dotenv").config();

function Video() {
  const { id: videoId } = useParams();
  const { isAuthenticated } = useAuth0();
  const { authenticated } = useAuth();

  //fectch
  const [data, setData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const KEY = process.env.REACT_APP_API_KEY1;
  const URL = "https://www.googleapis.com/youtube/v3/";

  useEffect(() => {
    if (!videoId) return;
    setLoaded(false);

    const loadData = async () => {
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
      await fetch(
        `${URL}search?part=id%2C+snippet&relatedToVideoId=${videoId}&key=${KEY}&order=viewCount&type=video&maxResults=12`
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
    loadData();
    loadRelatedVideos();
  }, [videoId, KEY]);

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
            <div className="top">
              <h3>{data.items[0].snippet.title}</h3>
              {(authenticated || isAuthenticated) && (
                <button className="addToFavorites">
                  <span>Add to favorites</span>
                  <StarIcon />
                </button>
              )}
            </div>

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
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  -webkit-scrollbar {
    display: none;
  }
  overflow: hidden;
  @media ${device.sm} {
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
  @media ${device.sm} {
  }
`;
const StyledVideoDetails = styled.div`
  padding: 0px 10px;
  display: -webkit-box;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  h3 {
    margin: 6px 1px;
    font-size: 1.5em;
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
  border: 1px solid #302f2f;
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
  /* height: 90vh; */
  padding: 1rem 2rem;
  overflow: hidden;
  overflow-y: hidden;
  /* border: 1px solid #302f2f; */
  @media ${device.sm} {
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

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #384d5f;
    color: white;
    width: auto;
    margin: 10px;
    padding: 5px 10px;
    align-self: center;
    border-radius: 10px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background: #56718a;
    }
  }
`;

export default Video;
