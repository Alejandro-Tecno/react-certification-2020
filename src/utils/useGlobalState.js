import { createContext, useContext, useReducer } from "react";

const themeContext = createContext({
isDark : false,
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

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });

  return { state, dispatch };
};

export default useGlobalState;
