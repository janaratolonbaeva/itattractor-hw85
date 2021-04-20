import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTracksOfAlbum} from "../../store/actions/trackActions";
import {Grid} from "@material-ui/core";
import TrackItem from "../../components/TrackItem/TrackItem";

const Tracks = ({match}) => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks.tracksOfAlbum);

  useEffect(() => {
    dispatch(fetchTracksOfAlbum(match.params.id));
  }, [dispatch, match.params.id]);

  console.log(tracks);

  return (
    <Grid container justify="space-between">
      {tracks ? Object.values(tracks).map(item => {
        return (
          <TrackItem
            key={item._id}
            name={item.title}
            number={item.number}
            duration={item.duration}
          />
        )}): null}
    </Grid>
  );
}

export default Tracks;