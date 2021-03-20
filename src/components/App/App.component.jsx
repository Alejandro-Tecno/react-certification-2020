import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import NotFound from '../../pages/NotFound';
import Homepage from "../../pages/Homepage"
function App() {
  

    return (
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
              <Homepage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
      </BrowserRouter>
    );
  }
  
  export default App;
  