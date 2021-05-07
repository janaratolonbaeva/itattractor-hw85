import {GET_ARTISTS_SUCCESS} from "../actions/artistActions";

const initialState = {
  artists: null,
  artistsError: null,
  artistsLoading: false,
  artistError: null,
  artistLoading: false
}

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS_SUCCESS:
      return {...state, artists: action.artists}
    default:
      return state
  }
};

export default artistReducer;