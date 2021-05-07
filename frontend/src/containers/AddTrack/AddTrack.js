import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FileInput from "../../components/Form/FileInput";
import FormElement from "../../components/Form/FormElement";
import ButtonWithProgress from "../../components/ButtonWithProgress/ButtonWithProgress";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbumsByArtist, postAlbum} from "../../store/actions/albumActions";
import {fetchArtists} from "../../store/actions/artistActions";
import {postTrack} from "../../store/actions/trackActions";

const AddTrack = ({history}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.tracks.trackError);
  const loading = useSelector(state => state.tracks.trackLoading);
  const artists = useSelector(state => state.artists.artists);
  const albums = useSelector(state => state.albums.albums);
  const [track, setTrack] = useState({
    title: '',
    duration: '',
    number: '',
    youtubeId: '',
    image: '',
    artist: '',
    album: ''
  });

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  const submitFormHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(track).forEach(key => {
      formData.append(key, track[key]);
    });

    dispatch(postTrack(formData));
    history.push('/');
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.name === 'artist') {
      dispatch(fetchAlbumsByArtist(e.target.value));
    }

    setTrack(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setTrack(prevState => ({
      ...prevState,
      [name]: file
    }));
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };

  return (
    <form onSubmit={submitFormHandler} noValidate>
      <Grid container direction="column" spacing={2}>
        {artists && (<FormElement
          required
          select
          label="choose Artist"
          name="artist"
          options={artists}
          value={track.artist}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />)}

        {albums && (<FormElement
          required
          select
          label="choose Album"
          name="album"
          options={albums}
          value={track.album}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />)}

        <FormElement
          required
          label="Title"
          name="title"
          value={track.title}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <FormElement
          required
          label="Duration"
          name="duration"
          value={track.duration}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <FormElement
          required
          label="Number"
          name="number"
          type="number"
          value={track.number}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <FormElement
          required
          label="Youtube url"
          name="youtubeId"
          value={track.youtubeId}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <Grid item xs>
          <FileInput
            name="image"
            label="Image"
            onChange={fileChangeHandler}
            error={getFieldError('')}
          />
        </Grid>

        <Grid item xs>
          <ButtonWithProgress
            type="submit"
            color="primary"
            variant="contained"
            loading={loading}
            disabled={loading}
          >
            Create
          </ButtonWithProgress>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTrack;