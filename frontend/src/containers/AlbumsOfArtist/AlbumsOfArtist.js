import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import Item from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbumsByArtist} from "../../store/actions/albumActions";

const AlbumsOfArtist = ({match}) => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.albumsByArtist);

  console.log(match.params.id);

  useEffect(() => {
    dispatch(fetchAlbumsByArtist(match.params.id));
  }, [dispatch, match.params.id]);

  return (
      <Grid container justify="space-between">
        {Object.values(albums).map((item) => {
          return (
            <Item
              key={item._id}
              url={`/tracks/${item._id}`}
              media={item.image}
              name={item.name}
              info={item.yearIssue}
            />
          )})}
      </Grid>
  );
};

export default AlbumsOfArtist;