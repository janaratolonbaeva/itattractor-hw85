import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core";
import history from "./history";
import {store} from './store/configureStore';
import theme from "./theme";
import App from './App';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

