import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../../pages/NotFound";
import Homepage from "../../pages/Homepage";
import Header from "../../pages/Content/Header";
import SearchPage from "../../pages/SearchPage";
import UserContext from "../../utils/UserContext";
import Video from "../../pages/Content/Video";
require("dotenv").config();

function App() {
  const [searchTerm, setSearchTerm] = useState("elmo");
  return (
    <BrowserRouter>
      <Layout>
        <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
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
    </BrowserRouter>
  );
}

export default App;
