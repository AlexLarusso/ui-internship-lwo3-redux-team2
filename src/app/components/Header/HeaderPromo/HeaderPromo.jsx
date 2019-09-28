/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import './HeaderPromo.scss';

function HeaderPromo() {
  return (
    <div className="promo__container">
      <div className="content__container">
        <div>
          <h1 className="promo__header">fashion that likes to say yes</h1>
          <p className="grey-text">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          <Link to="/product-details">
            <Button buttonText="SHOP NOW" classes="defaultBtn" />
          </Link>
        </div>
        <div className="image__container">
          <img alt="" className="promo__img" src={require('./testpic.jpg')} />
        </div>
      </div>
    </div>
  );
}

export default HeaderPromo;
