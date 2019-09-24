import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import counter from './reducers'

const store = createStore(counter)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('#root'));

  // ReactDOM.render(
  //   <Provider store={ store }>
  //     <App />
  //   </Provider>
  //   , document.querySelector('#root'));
