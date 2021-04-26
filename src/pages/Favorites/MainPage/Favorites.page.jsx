import React from "react";
import { useFavorites } from "../../../components/providers/Favorites";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import{StyledFavoritesPage,StyledFavoritesList} from "./Favorites.Styled"

function Favorites() {
  const { state, removeVideo } = useFavorites();
  const { favorites } = state;

  return (
    <StyledFavoritesPage>
      <h2 className="favorite-text">Favorite Videos</h2>
      <StyledFavoritesList>
        {favorites.length > 0 ? (
          favorites.map((video) => (
            <FavoriteCard
              description={video.snippet.description}
              image={video.snippet.thumbnails.high.url}
              key={video.id}
              id={video.id}
              title={video.snippet.title}
              removeVideo={() => removeVideo(video)}
            />
          ))
        ) : (
          <p>No favorite videos</p>
        )}
      </StyledFavoritesList>
    </StyledFavoritesPage>
  );
}


export default Favorites;
