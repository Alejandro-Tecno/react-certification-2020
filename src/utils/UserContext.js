import { createContext } from "react";

const UserContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  darkTheme: false,
  setDarkTheme: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  isLogged: false,
  setIsLogged: () => {},
});

export default UserContext;
