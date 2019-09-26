import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import counter from './reducers';
import logger from 'redux-logger';

const store = createStore(counter, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));
