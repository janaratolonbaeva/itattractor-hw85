import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/albums/:id" component={Albums}/>
        <Route path="/tracks/:id" exact component={Tracks}/>
      </Switch>
    </Layout>
  );
}

export default App;
