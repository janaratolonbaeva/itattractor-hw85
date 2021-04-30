import {GET_ARTISTS_SUCCESS} from "../actions/artistActions";

const initialState = {
  artists: null,
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