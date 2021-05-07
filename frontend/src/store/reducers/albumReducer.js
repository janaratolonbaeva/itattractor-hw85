import {GET_ALBUMS_BY_ARTIST_SUCCESS} from "../actions/albumActions";

const initialState = {
  albums: null,
  albumsError: null,
  albumsLoading: false,
  albumError: null,
  albumLoading: false
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_BY_ARTIST_SUCCESS:
      return {...state, albums: action.albums}
    default:
      return state
  }
}

export default albumReducer;

