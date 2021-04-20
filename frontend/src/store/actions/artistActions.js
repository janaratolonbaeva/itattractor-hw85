import axiosApi from "../../axiosApi";

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';

export const getArtistsSuccess = artists => ({type: GET_ARTISTS_SUCCESS, artists});

export const fetchArtists = () => {
  return async dispatch => {
    try {
      const response = await axiosApi.get('/artists');
      dispatch(getArtistsSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
}