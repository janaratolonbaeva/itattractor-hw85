import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import AddArtist from "./containers/AddArtist/AddArtist";
import AddAlbum from "./containers/AddAlbum/AddAlbum";
import AddTrack from "./containers/AddTrack/AddTrack";
import PlayList from "./containers/PlayList/PlayList";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add-artist" component={AddArtist}/>
        <Route path="/add-album" component={AddAlbum}/>
        <Route path="/add-track" component={AddTrack}/>
        <Route path="/artists/:id" component={Albums}/>
        <Route path="/albums/:id" component={Tracks}/>
        <Route path="/track-history" component={PlayList}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Layout>
  );
}

export default App;
