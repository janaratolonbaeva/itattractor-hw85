import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FileInput from "../../components/Form/FileInput";
import FormElement from "../../components/Form/FormElement";
import ButtonWithProgress from "../../components/ButtonWithProgress/ButtonWithProgress";
import {useDispatch, useSelector} from "react-redux";
import {postArtist} from "../../store/actions/artistActions";

const AddArtist = ({history}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.artists.artistError);
  const loading = useSelector(state => state.artists.artistLoading);
  const [state, setState] = useState({
    name: '',
    photo: '',
    info: '',
  });

  const submitFormHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });

    dispatch(postArtist(formData));
    history.push('/');
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setState(prevState => ({
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
        <FormElement
          required
          label="Name"
          name="name"
          value={state.name}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <FormElement
          required
          label="Info"
          name="info"
          value={state.info}
          onChange={inputChangeHandler}
          error={getFieldError('')}
        />

        <Grid item xs>
          <FileInput
            name="photo"
            label="Photo"
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

export default AddArtist;