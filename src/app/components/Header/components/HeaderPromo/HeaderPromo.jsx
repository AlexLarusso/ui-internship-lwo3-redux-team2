/* eslint-disable global-require */
import React from 'react';
import './HeaderPromo.scss';
import { Link } from 'react-router-dom';
import Button from '../../../shared/Button/Button';

function HeaderPromo() {
  return (
    <div className="header-promo-container">
      <div className="promo-text-container">
        <h1 className="promo-header">fashion that likes to say yes</h1>
        <p className="grey-text">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
      </div>
      <div className="image-container">
        <img className="promo-img" alt="Promo" src={require('./testpic.jpg')} />
      </div>
    </div>
  );
}
export default HeaderPromo;
