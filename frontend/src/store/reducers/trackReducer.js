import {
  GET_ONE_TRACK_FAILURE,
  GET_ONE_TRACK_REQUEST,
  GET_ONE_TRACK_SUCCESS,
  GET_TRACKS_OF_ALBUM_FAILURE,
  GET_TRACKS_OF_ALBUM_REQUEST,
  GET_TRACKS_OF_ALBUM_SUCCESS, POST_TRACK_FAILURE, POST_TRACK_REQUEST, POST_TRACK_SUCCESS
} from "../actions/trackActions";

const initialState = {
  tracks: null,
  tracksLoading: false,
  tracksError: null,
  trackItem: null,
  trackItemLoading: false,
  trackItemError: null,
  trackError: null,
  trackLoading: false
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS_OF_ALBUM_REQUEST:
      return {...state, tracksLoading: true};
    case GET_TRACKS_OF_ALBUM_SUCCESS:
      return {...state, tracksLoading: false, tracks: action.tracks};
    case GET_TRACKS_OF_ALBUM_FAILURE:
      return {...state, tracksLoading: false, tracksError: action.error};
    case GET_ONE_TRACK_REQUEST:
      return {...state, trackItemLoading: true};
    case GET_ONE_TRACK_SUCCESS:
      return {...state, trackItemLoading: false, trackItem: action.track};
    case GET_ONE_TRACK_FAILURE:
      return {...state, trackItemLoading: false, trackItemError: action.error};
    case POST_TRACK_REQUEST:
      return {...state, trackLoading: true};
    case POST_TRACK_SUCCESS:
      return {...state, trackLoading: false};
    case POST_TRACK_FAILURE:
      return {...state, trackLoading: false, trackError: action.error};
    default:
      return state;
  }
};

export default trackReducer;