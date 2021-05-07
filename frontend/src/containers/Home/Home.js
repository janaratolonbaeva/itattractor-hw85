import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchArtists} from "../../store/actions/artistActions";
import {Grid} from "@material-ui/core";
import Item from "../../components/Item/Item";

const Home = () => {
  const dispatch = useDispatch();
  const artists = useSelector(state => state.artists.artists);

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <>
        <Grid container justify="space-between">
        {artists && Object.values(artists).map((item) => {
          return (
            <Item
              key={item._id}
              url1={`/artists/${item._id}`}
              url2={`/add-album`}
              media={item.photo}
              name={item.name}
              info={item.info}
              btnText="see albums"
            />
          )})}
        </Grid>
    </>
  );
}

export default Home;