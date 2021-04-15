import React from "react";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext({
  isDark: false,
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
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default GlobalStateProvider;
