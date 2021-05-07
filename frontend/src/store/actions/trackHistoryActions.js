import axiosApi from "../../axiosApi";

export const POST_TRACK_TO_PLAYLIST_REQUEST = 'POST_TRACK_TO_PLAYLIST_REQUEST';
export const POST_TRACK_TO_PLAYLIST_SUCCESS = 'POST_TRACK_TO_PLAYLIST_SUCCESS';
export const POST_TRACK_TO_PLAYLIST_FAILURE = 'POST_TRACK_TO_PLAYLIST_FAILURE';
export const GET_TRACK_HISTORIES_REQUEST = 'GET_TRACK_HISTORIES_REQUEST';
export const GET_TRACK_HISTORIES_SUCCESS = 'GET_TRACK_HISTORIES_SUCCESS';
export const GET_TRACK_HISTORIES_FAILURE = 'GET_TRACK_HISTORIES_FAILURE';
export const GET_TRACK_ITEM_HISTORY_REQUEST = 'GET_TRACK_ITEM_HISTORY_REQUEST';
export const GET_TRACK_ITEM_HISTORY_SUCCESS = 'GET_TRACK_ITEM_HISTORY_SUCCESS';
export const GET_TRACK_ITEM_HISTORY_FAILURE = 'GET_TRACK_ITEM_HISTORY_FAILURE';

const postTrackToPlaylistRequest = () => ({type: POST_TRACK_TO_PLAYLIST_REQUEST});
const postTrackToPlaylistSuccess = () => ({type: POST_TRACK_TO_PLAYLIST_SUCCESS});
const postTrackToPlaylistFailure = error => ({type: POST_TRACK_TO_PLAYLIST_FAILURE, error});
const getTrackHistoriesRequest = () => ({type: GET_TRACK_HISTORIES_REQUEST});
const getTrackHistoriesSuccess = tracks => ({type: GET_TRACK_HISTORIES_SUCCESS, tracks});
const getTrackHistoriesFailure = error => ({type: GET_TRACK_HISTORIES_FAILURE, error});
const getTrackItemHistoryRequest = () => ({type: GET_TRACK_ITEM_HISTORY_REQUEST});
const getTrackItemHistorySuccess = track => ({type: GET_TRACK_ITEM_HISTORY_SUCCESS, track});
const getTrackItemHistoryFailure = error => ({type: GET_TRACK_ITEM_HISTORY_FAILURE, error});

export const postTrackToPlaylist = track => {
  return async (dispatch, getState) => {
    try {
      dispatch(postTrackToPlaylistRequest());
      const token = getState().users.user.token;
      const headers = {'Authorization': token};
      await axiosApi.post('/track-history', track, {headers});
      dispatch(postTrackToPlaylistSuccess());
    } catch (e) {
      dispatch(postTrackToPlaylistFailure(e));
    }
  }
};

export const fetchTrackHistories = () => {
  return async dispatch => {
    try {
      dispatch(getTrackHistoriesRequest());
      const response = await axiosApi.get('/track-history');
      dispatch(getTrackHistoriesSuccess(response.data));
    } catch (e) {
      dispatch(getTrackHistoriesFailure(e));
    }
  }
};

export const fetchTrackItemHistory = id => {
  return async dispatch => {
    try {
      dispatch(getTrackItemHistoryRequest());
      const response = await axiosApi.get(`/track-history/${id}`);
      dispatch(getTrackHistoriesSuccess(response.data));
    } catch (e) {
      dispatch(getTrackHistoriesFailure(e));
    }
  }
};
