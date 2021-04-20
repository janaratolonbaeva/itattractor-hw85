import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import Item from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbumsByArtist} from "../../store/actions/albumActions";

const Albums = ({match}) => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.albums);

  const id = match.params.id

  useEffect(() => {
    dispatch(fetchAlbumsByArtist(id));
  },[dispatch, id]);

  return (
    <>
      <Grid container justify="space-between">
        {albums ? Object.values(albums).map((item) => {
          return (
            <Item
              key={item._id}
              url={`/tracks/${item._id}`}
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