import React, { useContext, useCallback, useReducer } from "react";

const FavoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEO":
      const favorites = [...state.favorites, action.payload];
      const result = {
        ...state,
        favorites: [...new Set(favorites)],
      };
    case "REMOVE_VIDEO":
      const filteredFavorites = state.favorites.filter(
        (video) => video.id !== action.payload.id
      );
      const result = {
        ...state,
        favorites: filteredFavorites,
      };
    default:
      return state;
  }
};

const FavoritesContext = React.createContext(null);

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without and Provider`);
  }
  return context;
}

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FavoritesReducer, { favorites: [] });

  const addVideo = useCallback((video) => {
    dispatch({ type: ADD_VIDEO, payload: video });
  }, []);

  const removeVideo = useCallback((video) => {
    dispatch({ type: REMOVE_VIDEO, payload: video });
  }, []);

  return (
    <FavoritesContext.Provider value={{ addVideo, removeVideo, state }}>
      {children}
    </FavoritesContext.Provider>
  );
};
