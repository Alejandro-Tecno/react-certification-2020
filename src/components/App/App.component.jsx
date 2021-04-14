import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../../pages/NotFound";
import Homepage from "../../pages/Homepage";
import Header from "../../pages/Content/Header";
import SearchPage from "../../pages/SearchPage";
import UserContext from "../../utils/UserContext";
import Video from "../../pages/Content/Video";
import GlobalStateProvider from "../../utils/GlobalStateProvider";

require("dotenv").config();

function App() {
  const [searchTerm, setSearchTerm] = useState("elmo");
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Layout>
          <UserContext.Provider
            value={{ searchTerm, setSearchTerm, darkTheme, setDarkTheme }}
          >
            <Header />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/search/:searchTerm">
                <SearchPage />
              </Route>
              <Route path="/video/:id">
                <Video />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </UserContext.Provider>
        </Layout>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
