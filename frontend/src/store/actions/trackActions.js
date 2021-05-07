import axiosApi from "../../axiosApi";

export const GET_TRACKS_OF_ALBUM_REQUEST = 'GET_TRACKS_OF_ALBUM_REQUEST';
export const GET_TRACKS_OF_ALBUM_SUCCESS = 'GET_TRACKS_OF_ALBUM_SUCCESS';
export const GET_TRACKS_OF_ALBUM_FAILURE = 'GET_TRACKS_OF_ALBUM_FAILURE';
export const GET_ONE_TRACK_REQUEST = 'GET_ONE_TRACK_REQUEST';
export const GET_ONE_TRACK_SUCCESS = 'GET_ONE_TRACK_SUCCESS';
export const GET_ONE_TRACK_FAILURE = 'GET_ONE_TRACK_FAILURE';
export const POST_TRACK_REQUEST = 'POST_TRACK_REQUEST';
export const POST_TRACK_SUCCESS = 'POST_TRACK_SUCCESS';
export const POST_TRACK_FAILURE = 'POST_TRACK_FAILURE';

const getTracksOfAlbumRequest = () => ({type: GET_TRACKS_OF_ALBUM_REQUEST});
const getTracksOfAlbumSuccess = tracks => ({type: GET_TRACKS_OF_ALBUM_SUCCESS, tracks});
const getTracksOfAlbumFailure = error => ({type: GET_TRACKS_OF_ALBUM_FAILURE, error});
const getOneTrackRequest = () => ({type: GET_ONE_TRACK_REQUEST});
const getOneTrackSuccess = track => ({type: GET_ONE_TRACK_SUCCESS, track});
const getOneTrackFailure = error => ({type: GET_ONE_TRACK_FAILURE, error});
const postTrackRequest = () => ({type: POST_TRACK_REQUEST});
const postTrackSuccess = () => ({type: POST_TRACK_SUCCESS});
const postTrackFailure = error => ({type: POST_TRACK_FAILURE, error});

export const fetchTracksOfAlbum = id => {
  return async dispatch => {
    try {
      dispatch(getTracksOfAlbumRequest());
      const response = await axiosApi.get(`/tracks?album=${id}`);
      dispatch(getTracksOfAlbumSuccess(response.data));
    } catch (e) {
      dispatch(getTracksOfAlbumFailure(e));
    }
  }
};

export const fetchOneTrack = id => {
  return async dispatch => {
    try {
      dispatch(getOneTrackRequest());
      const response = await axiosApi.get(`/tracks/${id}`);
      dispatch(getOneTrackSuccess(response.data));
    } catch (e) {
      dispatch(getOneTrackFailure(e));
    }
  }
};

export const postTrack = track => {
  return async (dispatch, getState) => {
    try {
      dispatch(postTrackRequest());
      const token = getState().users.user.token;
      const headers = {'Authorization': token};
      await axiosApi.post('/tracks', track, {headers});
      dispatch(postTrackSuccess());
    } catch (e) {
      dispatch(postTrackFailure(e));
    }
  }
};







