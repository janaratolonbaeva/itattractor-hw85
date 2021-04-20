import axiosApi from "../../axiosApi";

export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_BY_ARTIST_SUCCESS = 'GET_ALBUMS_BY_ARTIST_SUCCESS';

export const getAlbumsSuccess = albums => ({type: GET_ALBUMS_SUCCESS, albums});
export const getAlbumsByArtistSuccess = albums => ({type: GET_ALBUMS_BY_ARTIST_SUCCESS, albums});

export const fetchAlbums = () => {
  return async dispatch => {
    try {
      const response = await axiosApi.get('/albums');
      dispatch(getAlbumsSuccess(response.data));
    } catch (e) {
      console.log(e)
    }
  }
};

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