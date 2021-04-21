import { createContext } from "react";

const UserContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  darkTheme: false,
  setDarkTheme: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  favoriteVideos: [],
  addFavoriteVideo: () => {},
  removeFavoriteVideo: () => {},
});

export default UserContext;
