import { createContext } from "react";

const UserContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  darkTheme: false,
  setDarkTheme: () => {},
});

export default UserContext;
