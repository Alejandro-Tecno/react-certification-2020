import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../../pages/NotFound";
import Homepage from "../../pages/Homepage";
import Header from "../../pages/Content/Header";
import SearchPage from "../../pages/SearchPage";
import UserContext from "../../utils/UserContext";
import Video from "../../pages/Content/Video";
import GlobalStateProvider from "../providers/GlobalState/GlobalStateProvider";
import Modal from "../Login/";
import AuthProvider from "../providers/Auth";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../../pages/Favorites/MainPage";
import FavoritesProvider from "../providers/Favorites";
import FavoriteView from "../../pages/Favorites/FavoriteView/FavoriteView";
require("dotenv").config();

function App() {
  const [searchTerm, setSearchTerm] = useState("elmo");
  const [darkTheme, setDarkTheme] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AuthProvider>
      <FavoritesProvider>
        <HashRouter>
          <GlobalStateProvider>
            <Layout>
              <UserContext.Provider
                value={{
                  searchTerm,
                  setSearchTerm,
                  darkTheme,
                  setDarkTheme,
                  modalOpen,
                  setModalOpen,
                }}
              >
                <Header />
                <Modal />
                <Switch>
                  <Route exact path="/">
                    <Homepage title="Recommended videos" />
                  </Route>
                  <Route path="/search/:searchTerm">
                    <Homepage title="Search results"/>
                  </Route>
                  <Route path="/video/:id">
                    <Video />
                  </Route>
                  <ProtectedRoute
                    path="/favorites/:id"
                    component={FavoriteView}
                  />
                  <ProtectedRoute path="/favorites" component={Favorites} />
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </UserContext.Provider>
            </Layout>
          </GlobalStateProvider>
        </HashRouter>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
