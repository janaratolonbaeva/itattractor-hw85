import axiosApi from "../../axiosApi";

export const GET_TRACKS_OF_ALBUM_SUCCESS = 'GET_TRACKS_OF_ALBUM_SUCCESS';

export const getTracksOfAlbumSuccess = tracks => ({type: GET_TRACKS_OF_ALBUM_SUCCESS, tracks});


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