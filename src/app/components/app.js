// import React, { Component } from 'react';
// import CounterContainer from '../containers/CounterContainer.js'

// export default class App extends Component {
//   render() {
//     return (
//       <CounterContainer />
//     );
//   }
// }
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import style from './app.scss';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './shared/ProductDetails/ProductDetails.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ HomePage }/>
            <Route path="/home" component={ HomePage }/>
            <Route path="/productdetails" component={ ProductDetails }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

// import React from "react";
// import ReactDOM from "react-dom";
// import style from './app.scss';

// const App = () => {
//   console.log(style)
//   return (
//     <div className={style.test}>
//       <p className={style.testHello}>React here!</p>
//       <p className='test'>React here!</p>
//       <img src={require('../../assets/logo.png')} />
//     </div>
//   );
// };
// export default App;
ReactDOM.render(<App />, document.getElementById("root"));
