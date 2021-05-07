import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FileInput from "../../components/Form/FileInput";
import FormElement from "../../components/Form/FormElement";
import ButtonWithProgress from "../../components/ButtonWithProgress/ButtonWithProgress";
import {useDispatch, useSelector} from "react-redux";
import {postAlbum} from "../../store/actions/albumActions";
import {fetchArtists} from "../../store/actions/artistActions";

const AddAlbum = ({history}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.albums.albumError);
  const loading = useSelector(state => state.albums.albumLoading);
  const artists = useSelector(state => state.artists.artists);
  const [album, setAlbum] = useState({
    title: '',
    yearIssue: '',
    image: '',
    artist: ''
  });

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  const submitFormHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(album).forEach(key => {
      formData.append(key, album[key]);
    });

    dispatch(postAlbum(formData));
    history.push('/');
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setAlbum(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setAlbum(prevState => ({
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
          value={album.artist}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />)}

        <FormElement
          required
          label="Title"
          name="title"
          value={album.title}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <FormElement
          required
          label="Year Issue"
          name="yearIssue"
          value={album.yearIssue}
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

export default AddAlbum;