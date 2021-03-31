import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../../pages/NotFound";
import Homepage from "../../pages/Homepage";
import Header from "../../pages/Content/Header";
import useFetch from "../Hooks/useFetch";
import SearchPage from "../../pages/SearchPage";
import UserContext from "../../utils/UserContext";

function App() {
  const [searchTest, setSearchTest] = useState();
  const [value, setValue] = useState("elmo");

  return (
    <BrowserRouter>
      <Layout>
        <UserContext.Provider value={{ value, setValue }}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/search/:searchTerm">
              <SearchPage />
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
