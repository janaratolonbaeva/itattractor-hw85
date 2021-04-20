import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import AlbumsOfArtist from "./containers/AlbumsOfArtist/AlbumsOfArtist";
import TracksOfAlbum from "./containers/TracksOfAlbum/TracksOfAlbum";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/artists/:id" exact component={AlbumsOfArtist}></Route>
        <Route path="/albums" exact component={Albums}></Route>
        <Route path="/albums/:id" component={TracksOfAlbum}></Route>
        <Route path="/tracks" exact component={Tracks}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
