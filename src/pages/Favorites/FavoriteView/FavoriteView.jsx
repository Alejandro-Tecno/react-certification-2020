import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "../../Content/RelatedVideos";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../../components/providers/Auth";
import StarIcon from "@material-ui/icons/Star";
import { useFavorites } from "../../../components/providers/Favorites";
import {StyledVideoPage,StyledVideoView, StyledVideoDetails, StyledVideo, StyledVideoContainer} from "./FavoriteView.Styled"
import { useTranslation } from "react-i18next";
require("dotenv").config();

function FavoriteView() {
  const { id: videoId } = useParams();
  const { isAuthenticated } = useAuth0();
  const { authenticated } = useAuth();
  const { state, addVideo, removeVideo } = useFavorites();
  const { favorites } = state;
  const [favoriteVideo, setFavoriteVideo] = useState(false);
  const [data, setData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
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

    const HandleFavorites = favorites.find((video) => videoId === video.id);
    HandleFavorites ? setFavoriteVideo(true) : setFavoriteVideo(false);

    loadData();
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
      {favorites ? <RelatedVideos relatedData={favorites} /> : <p>{t("loading")}</p>}
    </StyledVideoPage>
  );
}


export default FavoriteView;
