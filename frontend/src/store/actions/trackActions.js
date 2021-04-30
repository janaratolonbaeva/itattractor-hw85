import axiosApi from "../../axiosApi";

export const GET_TRACKS_OF_ALBUM_SUCCESS = 'GET_TRACKS_OF_ALBUM_SUCCESS';
export const GET_ONE_TRACK_SUCCESS = 'GET_ONE_TRACK_SUCCESS';

const getTracksOfAlbumSuccess = tracks => ({type: GET_TRACKS_OF_ALBUM_SUCCESS, tracks});
const getOneTrackSuccess = track => ({type: GET_ONE_TRACK_SUCCESS, track});

export const fetchTracksOfAlbum = id => {
  return async dispatch => {
    try {
      const response = await axiosApi.get(`/tracks?album=${id}`);
      dispatch(getTracksOfAlbumSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};

export const fetchOneTrack = id => {
  return async dispatch => {
    try {
      const response = await axiosApi.get(`/tracks/${id}`);
      dispatch(getOneTrackSuccess(response.data));
    } catch (e) {

    }
  }
};







