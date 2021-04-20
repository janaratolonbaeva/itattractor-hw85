import {GET_ALBUMS_BY_ARTIST_SUCCESS, GET_ALBUMS_SUCCESS} from "../actions/albumActions";

const initialState = {
  albums: '',
  albumsByArtist: ''
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_SUCCESS:
      return {...state, albums: action.albums}
    case GET_ALBUMS_BY_ARTIST_SUCCESS:
      return {...state, albumsByArtist: action.albums}
    default:
      return state
  }
}

export default albumReducer;

