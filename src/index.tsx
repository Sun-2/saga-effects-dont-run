import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {saga} from './App';
import * as serviceWorker from './serviceWorker';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: state => {
  },
  middleware: defaultMiddleware => defaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
