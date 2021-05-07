import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";

export const GET_ARTISTS_REQUEST = 'GET_ARTISTS_REQUEST';
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_FAILURE';
export const POST_ARTIST_REQUEST = 'POST_ARTIST_REQUEST';
export const POST_ARTIST_SUCCESS = 'POST_ARTIST_SUCCESS';
export const POST_ARTIST_FAILURE = 'POST_ARTIST_FAILURE';

const getArtistsRequest = () => ({type: GET_ARTISTS_REQUEST});
const getArtistsSuccess = artists => ({type: GET_ARTISTS_SUCCESS, artists});
const getArtistsFailure = error => ({type: GET_ARTISTS_FAILURE, error});
const postArtistRequest = () => ({type: POST_ARTIST_REQUEST});
const postArtistSuccess = () => ({type: POST_ARTIST_SUCCESS});
const postArtistFailure = error => ({type: POST_ARTIST_FAILURE, error});

export const fetchArtists = () => {
  return async dispatch => {
    try {
      dispatch(getArtistsRequest());
      const response = await axiosApi.get('/artists');
      dispatch(getArtistsSuccess(response.data));
    } catch (e) {
      dispatch(getArtistsFailure(e));
    }
  }
};

export const postArtist = (artist) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postArtistRequest());
      const token = getState().users.user.token;
      const headers = {'Authorization': token};
      await axiosApi.post('/artists', artist, {headers});
      dispatch(postArtistSuccess());
      dispatch(historyPush('/'));
    } catch (e) {
      dispatch(postArtistFailure(e));
    }
  }
}

