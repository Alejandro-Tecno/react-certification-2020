import { createContext } from "react";

const UserContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
});

/* const UserContext = createContext(); */

export default UserContext;
