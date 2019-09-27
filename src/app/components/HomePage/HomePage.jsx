/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
