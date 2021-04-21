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
  favoriteVideos: [],
  addFavoriteVideo: () => {},
  removeFavoriteVideo: () => {},
  userInfo: null,
});

export default UserContext;
