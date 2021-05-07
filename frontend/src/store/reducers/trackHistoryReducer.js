import {
  GET_TRACK_HISTORIES_FAILURE,
  GET_TRACK_HISTORIES_REQUEST,
  GET_TRACK_HISTORIES_SUCCESS, GET_TRACK_ITEM_HISTORY_FAILURE,
  GET_TRACK_ITEM_HISTORY_REQUEST,
  GET_TRACK_ITEM_HISTORY_SUCCESS,
  POST_TRACK_TO_PLAYLIST_FAILURE,
  POST_TRACK_TO_PLAYLIST_REQUEST,
  POST_TRACK_TO_PLAYLIST_SUCCESS
} from "../actions/trackHistoryActions";

const initialState = {
  trackHistories: null,
  trackHistoriesLoading: false,
  trackHistoriesError: null,
  trackLoading: false,
  trackError: null,
  trackItem: null,
  trackItemLoading: false,
  trackItemError: null
}

const trackHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TRACK_TO_PLAYLIST_REQUEST:
      return {...state, trackLoading: true};
    case POST_TRACK_TO_PLAYLIST_SUCCESS:
      return {...state, trackLoading: false};
    case POST_TRACK_TO_PLAYLIST_FAILURE:
      return {...state, trackLoading: false, trackError: action.error};
    case GET_TRACK_HISTORIES_REQUEST:
      return {...state, trackHistoriesLoading: true};
    case GET_TRACK_HISTORIES_SUCCESS:
      return {...state, trackHistoriesLoading: false, trackHistories: action.tracks};
    case GET_TRACK_HISTORIES_FAILURE:
      return {...state, trackHistoriesLoading: false, trackHistoriesError: action.error};
    case GET_TRACK_ITEM_HISTORY_REQUEST:
      return {...state, trackItemLoading: true};
    case GET_TRACK_ITEM_HISTORY_SUCCESS:
      return {...state, trackItemLoading: false, trackItem: action.track};
    case GET_TRACK_ITEM_HISTORY_FAILURE:
      return {...state, trackItemLoading: false, trackItemError: action.error}
    default: return state;
  }
}

export default trackHistoryReducer;