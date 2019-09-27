// import React, { Component } from 'react';
// import CounterContainer from '../containers/CounterContainer';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class App extends Component {
//   render() {
//     return (
//       <CounterContainer />
//     );
//   }
// }

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import ProductDetails from './shared/ProductDetails/ProductDetails';
import Footer from './HomePage/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/product-details" component={ProductDetails} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
