import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTracks} from "../../store/actions/trackActions";
import {Grid} from "@material-ui/core";
import TrackItem from "../../components/TrackItem/TrackItem";

const Tracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks.tracks);

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

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