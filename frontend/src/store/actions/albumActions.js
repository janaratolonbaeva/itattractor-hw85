import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";

export const GET_ALBUMS_BY_ARTIST_REQUEST = 'GET_ALBUMS_BY_ARTIST_REQUEST';
export const GET_ALBUMS_BY_ARTIST_SUCCESS = 'GET_ALBUMS_BY_ARTIST_SUCCESS';
export const GET_ALBUMS_BY_ARTIST_FAILURE = 'GET_ALBUMS_BY_ARTIST_FAILURE';
export const POST_ALBUM_REQUEST = 'POST_ALBUM_REQUEST';
export const POST_ALBUM_SUCCESS = 'POST_ALBUM_SUCCESS';
export const POST_ALBUM_FAILURE = 'POST_ALBUM_FAILURE';

const getAlbumsByArtistRequest = () => ({type: GET_ALBUMS_BY_ARTIST_REQUEST});
const getAlbumsByArtistSuccess = albums => ({type: GET_ALBUMS_BY_ARTIST_SUCCESS, albums});
const getAlbumsByArtistFailure = error => ({type: GET_ALBUMS_BY_ARTIST_FAILURE, error});
const postAlbumRequest = () => ({type: POST_ALBUM_REQUEST});
const postAlbumSuccess = () => ({type: POST_ALBUM_SUCCESS});
const postAlbumFailure = error => ({type: POST_ALBUM_FAILURE, error});

export const fetchAlbumsByArtist = (id) => {
  return async dispatch => {
    try {
      dispatch(getAlbumsByArtistRequest());
      const response = await axiosApi.get(`/albums?artist=${id}`);
      dispatch(getAlbumsByArtistSuccess(response.data));
    } catch (e) {
      dispatch(getAlbumsByArtistFailure(e));
    }
  }
};

export const postAlbum = (album) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postAlbumRequest());
      const token = getState().users.user.token;
      const headers = {'Authorization': token};
      await axiosApi.post('/albums', album, {headers});
      dispatch(postAlbumSuccess());
      dispatch(historyPush('/'));
    } catch (e) {
      dispatch(postAlbumFailure(e));
    }
  }
};