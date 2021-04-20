import axiosApi from "../../axiosApi";

export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
export const GET_TRACKS_OF_ALBUM_SUCCESS = 'GET_TRACKS_OF_ALBUM_SUCCESS';

export const getTracksSuccess = tracks => ({type: GET_TRACKS_SUCCESS, tracks});
export const getTracksOfAlbumSuccess = tracks => ({type: GET_TRACKS_OF_ALBUM_SUCCESS, tracks});

export const fetchTracks = () => {
  return async dispatch => {
    try {
      const response = await axiosApi.get('/tracks');
      dispatch(getTracksSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};

export const fetchTracksOfAlbum = id => {
  return async dispatch => {
    try {
      const response = await axiosApi.get(`/tracks?album=${id}`);
      dispatch(getTracksOfAlbumSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
}