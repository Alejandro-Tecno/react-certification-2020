import styled from "styled-components";

export const StyledFavoritesPage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 60px);
  .favorite-text {
    font-size: 3rem;
    margin: 20px 0px 2px 50px;
  }
`;

export const StyledFavoritesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  padding: 1rem 2rem;
  margin-top: 5px;
  text-decoration: none;
`;


