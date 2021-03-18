import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Header from '../../pages/Header'
import Content from "../../pages/Content/Content.page";
import NotFound from '../../pages/NotFound';

function App() {
  

    return (
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Header />
                <Content /> 
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
  