import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import axiosApi from "../axiosApi";
import {loadFromToLocalStorage, saveToLocalStorage} from "./localStorage";
import artistReducer from "./reducers/artistReducer";
import albumReducer from "./reducers/albumReducer";
import trackReducer from "./reducers/trackReducer";
import usersReducer, {initialState} from "./reducers/usersReducer";
import trackHistoryReducer from "./reducers/trackHistoryReducer";

const rootReducer = combineReducers({
  artists: artistReducer,
  albums: albumReducer,
  tracks: trackReducer,
  users: usersReducer,
  trackHistories: trackHistoryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromToLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      ...initialState,
      user: store.getState().users.user,
    }
  });
});

axiosApi.interceptors.request.use(config => {
  try {
    config.headers['Authorization'] = store.getState().users.user.token;
  } catch (e) {
    // do nothing, no token exists
  }

  return config;
});

axiosApi.interceptors.response.use(res => res, e => {
  if (!e.response) {
    e.response = {data: {global: 'No internet'}};
  }

  throw e;
})

export default store;