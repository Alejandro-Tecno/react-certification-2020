import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../../components/providers/Auth";
import StarIcon from "@material-ui/icons/Star";
import { useFavorites } from "../../../components/providers/Favorites";
import {
  StyledVideoPage,
  StyledVideoContainer,
  StyledVideoView,
  StyledVideoDetails,
  StyledVideo,
} from "./Video.Styled";
import { useTranslation } from "react-i18next";
require("dotenv").config();

function Video() {
  const { id: videoId } = useParams();
  const { isAuthenticated } = useAuth0();
  const { authenticated } = useAuth();
  const { state, addVideo, removeVideo } = useFavorites();
  const { favorites } = state;
  const [favoriteVideo, setFavoriteVideo] = useState(false);
  const { t } = useTranslation();
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
          document.title = receivedData.items[0].snippet.title;
          console.log(receivedData.items[0]);
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

    const HandleFavorites = favorites.find((video) => videoId === video.id);
    HandleFavorites ? setFavoriteVideo(true) : setFavoriteVideo(false);

    loadData();
    loadRelatedVideos();
  }, [videoId, KEY, favorites]);

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
              {(authenticated || isAuthenticated) && !favoriteVideo && (
                <button
                  className="addToFavorites"
                  onClick={() => addVideo(data.items[0])}
                >
                  <span>{t("addToFavorites")}</span>
                  <StarIcon />
                </button>
              )}
              {(authenticated || isAuthenticated) && favoriteVideo && (
                <button
                  className="addToFavorites"
                  onClick={() => removeVideo(data.items[0])}
                >
                  <span>{t("removeFromFavorites")}</span>
                  <StarIcon />
                </button>
              )}
            </div>

            <p>{data.items[0].snippet.description}</p>
          </StyledVideoDetails>
        </StyledVideoContainer>
      ) : (
        t("loading")
      )}
      {relatedData && loaded ? (
        <RelatedVideos relatedData={relatedData} />
      ) : (
        <p>{t("loading")}</p>
      )}
    </StyledVideoPage>
  );
}

export default Video;
