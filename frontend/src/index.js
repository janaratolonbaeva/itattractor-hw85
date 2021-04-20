import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import artistReducer from "./store/reducers/artistReducer";
import albumReducer from "./store/reducers/albumReducer";
import trackReducer from "./store/reducers/trackReducer";

const rootReducer = combineReducers({
  artists: artistReducer,
  albums: albumReducer,
  tracks: trackReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, enhancers);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

