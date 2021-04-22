import React from "react";
import { useFavorites } from "../../../components/providers/Favorites";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import styled from "styled-components";
function Favorites() {
  const { state } = useFavorites();
  const { favorites } = state;
  /*   const handleRemove = (video) => {
    console.log("holi");
    removeVideo(video);
  }; */
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
              /* handleRemove={handleRemove(video)} */
            />
          ))
        ) : (
          <p>No favorite videos</p>
        )}
      </StyledFavoritesList>
    </StyledFavoritesPage>
  );
}

const StyledFavoritesPage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 60px);
  .favorite-text {
    font-size: 3rem;
    margin: 20px 0px 2px 50px;
  }
`;

const StyledFavoritesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  padding: 1rem 2rem;
  margin-top: 5px;
  text-decoration: none;
`;

export default Favorites;
