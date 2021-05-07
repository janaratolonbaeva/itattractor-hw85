import React, {useEffect, useState} from 'react';
import {Backdrop, Fade, Grid, Modal} from "@material-ui/core";
import Item from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {fetchOneTrack, fetchTracksOfAlbum} from "../../store/actions/trackActions";
import {fetchTrackItemHistory} from "../../store/actions/trackHistoryActions";

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

const PlayList = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.trackHistories.trackHistories);
  const track = useSelector(state => state.tracks.trackItem);
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = (id) => {
    dispatch(fetchOneTrack(id));
    setOpen(true);
  };

  return (
    <>
      <Grid container justify="space-between">
        {tracks && Object.values(tracks).map(item => {
          return (
            <Item
              key={item._id}
              name={item.title}
              media={item.image}
              info={`number track: ${item.number}, duration: ${item.duration}`}
              onClick={() => {openModal(item._id)}}
              clickContent={() => {return}}
            />
          )})}
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
            width="560"
            height="315"
            src={track.youtubeId}
            frameBorder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Fade>
      </Modal>)}
    </>
  );
};

export default PlayList;