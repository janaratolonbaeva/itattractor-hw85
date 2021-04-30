import {GET_ONE_TRACK_SUCCESS, GET_TRACKS_OF_ALBUM_SUCCESS} from "../actions/trackActions";

const initialState = {
  tracks: null,
  trackItem: null
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS_OF_ALBUM_SUCCESS:
      return {...state, tracks: action.tracks}
    case GET_ONE_TRACK_SUCCESS:
      return {...state, trackItem: action.track}
    default:
      return state;
  }
};

export default trackReducer;