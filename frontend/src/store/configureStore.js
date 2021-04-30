import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import axiosApi from "../axiosApi";
import {loadFromToLocalStorage, saveToLocalStorage} from "./localStorage";
import artistReducer from "./reducers/artistReducer";
import albumReducer from "./reducers/albumReducer";
import trackReducer from "./reducers/trackReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  artistReducer,
  albumReducer,
  trackReducer,
  users: usersReducer,
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
    users: store.getState().users
  })
});


axiosApi.interceptors.request.use(config => {
  try {
    config.headers['Authorization'] = store.getState().users.user.token;
  } catch (e) {
    // do nothing
  }

  return config;
})