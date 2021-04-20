import {GET_TRACKS_OF_ALBUM_SUCCESS, GET_TRACKS_SUCCESS} from "../actions/trackActions";

const initialState = {
  tracks: '',
  tracksOfAlbum: ''
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS_SUCCESS:
      return {...state, tracks: action.tracks}
    case GET_TRACKS_OF_ALBUM_SUCCESS:
      return {...state, tracksOfAlbum: action.tracks}
    default:
      return state;
  }
};

export default trackReducer;