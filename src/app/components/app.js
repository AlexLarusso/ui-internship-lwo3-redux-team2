import React from "react";
import ReactDOM from "react-dom";
import style from './app.scss';

const App = () => {
  console.log(style)
  return (
    <div className={style.test}>
      <p className={style.testHello}>React here!</p>
      <p className='test'>React here!</p>
      <img src={require('../../assets/logo.png')} />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));


//Redux test component:
// import React, { Component } from 'react';
// import CounterContainer from '../containers/CounterContainer.js'

// export default class App extends Component {
//   render() {
//     return (
//       <CounterContainer />
//     );
//   }
// }

