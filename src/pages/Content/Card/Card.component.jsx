import React, { useEffect, useState } from "react";
import { StyledLink, StyledCard, StyledCardHolder } from "./Card.Styled";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../../components/providers/Auth";
import StarIcon from "@material-ui/icons/Star";
import { useTranslation } from "react-i18next";
import { useFavorites } from "../../../components/providers/Favorites";

function Card({ image, title, description, id, removeVideo, video }) {
  const { isAuthenticated } = useAuth0();
  const { authenticated } = useAuth();
  const { t } = useTranslation();
  const { state, addVideo } = useFavorites();
  const { favorites } = state;
  const [favoriteVideo, setFavoriteVideo] = useState(false);
  const KEY = process.env.REACT_APP_API_KEY1;
  const URL = "https://www.googleapis.com/youtube/v3/";

  /* useEffect(() => {
    const HandleFavorites = favorites.find((video) => id === video.id);
    HandleFavorites ? setFavoriteVideo(true) : setFavoriteVideo(false);
  }, []); */

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const loadData = async () => {
    await fetch(`${URL}videos?part=id%2C+snippet&id=${id}&key=${KEY}`)
      .then((response) => response.json())
      .then((receivedData) => {
        setData(receivedData);
        handleAddVideo();
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleAddVideo = () => {
    console.log(data.items[0]);
    addVideo(data.items[0])
  };

  return (
    <StyledCardHolder>
      <StyledLink to={`/video/${id}`}>
        <StyledCard data-testid="card_div">
          <div className="video-image" data-testid="video-image">
            <img data-testid="card_img" src={image} alt="" />
          </div>
          <div className="video-content">
            <h2 data-testid="card_h2">
              {title
                .replace(/&#39;/g, "'")
                .replace(/&quot;/g, "'")
                .replace(/&amp;/g, "&")}
              ;
            </h2>
            <p data-testid="video_description">{description}</p>
          </div>
        </StyledCard>
      </StyledLink>
      {(authenticated || isAuthenticated) & favoriteVideo && (
        <>
          <button onClick={removeVideo}>
            <span>{t("remove")}</span>
            <StarIcon />
          </button>
        </>
      )}
      {(authenticated || isAuthenticated) & !favoriteVideo && (
        <>
          <button onClick={() => loadData()}>
            <span>{t("add")}</span>
            <StarIcon />
          </button>
        </>
      )}
    </StyledCardHolder>
  );
}

export default Card;
