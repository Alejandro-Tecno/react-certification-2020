import React, { useContext, useCallback, useReducer, useEffect } from "react";

const FavoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEO": {
      const favorites = [...state.favorites, action.payload];
      const result = {
        ...state,
        favorites: [...new Set(favorites)],
      };
      console.log(result);
      window.localStorage.setItem("Favorites", JSON.stringify(result));
      return result;
    }
    case "REMOVE_VIDEO": {
      const filteredFavorites = state.favorites.filter(
        (video) => video.id !== action.payload.id
      );
      const result = {
        ...state,
        favorites: filteredFavorites,
      };
      console.log(result);
      window.localStorage.setItem("Favorites", JSON.stringify(result));
      return result;
    }
    case "RESTORE_FAVORITES": {
      return { ...action.payload };
    }
    default:
      return state;
  }
};

const FavoritesContext = React.createContext(null);

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavorites" without a Provider`);
  }
  return context;
}

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FavoritesReducer, { favorites: [] });

  const addVideo = useCallback((video) => {
    dispatch({ type: "ADD_VIDEO", payload: video });
  }, []);

  const removeVideo = useCallback((video) => {
    dispatch({ type: "REMOVE_VIDEO", payload: video });
  }, []);

  const handleFavorites = (key) => {
    try {
      const value = window.localStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.error("Error");
      return null;
    }
  };

  useEffect(() => {
    const storedFavorites = handleFavorites("Favorites") || null;

    dispatch({
      type: "RESTORE_FAVORITES",
      payload: {
        favorites: storedFavorites?.favorites || [],
      },
    });
  }, []);

  return (
    <FavoritesContext.Provider value={{ addVideo, removeVideo, state }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { useFavorites };
export default FavoritesProvider;
