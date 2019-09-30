import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import ProductDetails from './shared/ProductDetails/ProductDetails';
import Footer from './Footer/Footer';
import '../styles/_common.scss';
import '../styles/_reset.scss';
import '../styles/_variables.scss';
import '../styles/_gridSystem.scss';

const App = () => (
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

export default App;
