import axiosApi from "../../axiosApi";

export const GET_ALBUMS_BY_ARTIST_SUCCESS = 'GET_ALBUMS_BY_ARTIST_SUCCESS';

export const getAlbumsByArtistSuccess = albums => ({type: GET_ALBUMS_BY_ARTIST_SUCCESS, albums});


export const fetchAlbumsByArtist = (id) => {
  return async dispatch => {
    try {
      const response = await axiosApi.get(`albums?artist=${id}`);
      dispatch(getAlbumsByArtistSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
}