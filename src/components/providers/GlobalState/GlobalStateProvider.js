import React from "react";
import { createContext, useReducer } from "react";

export const GlobalContext = createContext({
  isDark: false,
  favoriteVideos: [],
  addFavoriteVideo: () => {},
  removeFavoriteVideo: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "TOOGLE_DARK_MODE":
      return {
        isDark: !state.isDark,
      };

    default: {
      return state;
    }
  }
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
