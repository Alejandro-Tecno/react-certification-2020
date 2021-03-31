import { createContext } from "react";

const UserContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
});

export default UserContext;
