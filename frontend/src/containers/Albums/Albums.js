import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import Item from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumActions";

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  },[dispatch]);

  console.log(albums);

  return (
    <>
      <Grid container justify="space-between">
        {albums ? Object.values(albums).map((item) => {
          return (
            <Item
              key={item._id}
              url={`/albums/${item._id}`}
              media={item.image}
              name={item.name}
              info={item.yearIssue}
            />
          )}) : null}
      </Grid>
    </>
  );
};

export default Albums;