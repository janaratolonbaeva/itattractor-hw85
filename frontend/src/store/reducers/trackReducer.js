import {GET_TRACKS_OF_ALBUM_SUCCESS} from "../actions/trackActions";

const initialState = {
  tracks: '',
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS_OF_ALBUM_SUCCESS:
      return {...state, tracks: action.tracks}
    default:
      return state;
  }
};

export default trackReducer;