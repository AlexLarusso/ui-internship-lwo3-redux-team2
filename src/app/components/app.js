import React, { Component } from 'react';
import Nav from './Nav';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home} />
            <Route path="/products" component={ProductList} />
            <Route path="/productsdetail" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return(
  <div>
    <h1>Home page!</h1>
  </div>
  )
}
