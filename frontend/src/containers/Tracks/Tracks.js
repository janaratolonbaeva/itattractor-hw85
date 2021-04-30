import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchOneTrack, fetchTracksOfAlbum} from "../../store/actions/trackActions";
import {Backdrop, Fade, Grid, Modal} from "@material-ui/core";
import Item from "../../components/Item/Item";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    height: '100%',
    width: '100%'
  }
});

const Tracks = ({match}) => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks.tracks);
  const track = useSelector(state => state.tracks.trackItem);
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  const handleClose = () => {
    setOpen(false);
  };

  const id = match.params.id;

  useEffect(() => {
    dispatch(fetchTracksOfAlbum(id));
  }, [dispatch, id]);

  const openModal = (id) => {
    dispatch(fetchOneTrack(id));
    setOpen(true);
  };

  const addToTrackHistory = () => {
    console.log('add');
  }

  console.log(track);

  return (
    <>
      <Grid container justify="space-between">
        {tracks ? Object.values(tracks).map(item => {
          return (
            <Item
              key={item._id}
              name={item.title}
              media={item.image}
              info={`number track: ${item.number}, duration: ${item.duration}`}
              onClick={() => {openModal(item._id)}}
              clickContent={addToTrackHistory}
            />
          )}) : null}
      </Grid>
      {track && (<Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <iframe
            width="420"
            height="315"
            src={track.youtubeId + '?autoplay=1'}
            frameBorder="0"
            title={track.title}
          />
        </Fade>
      </Modal>)}
    </>
  );
};

export default Tracks;