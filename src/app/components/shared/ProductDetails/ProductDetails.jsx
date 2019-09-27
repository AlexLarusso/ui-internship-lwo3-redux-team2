/* eslint-disable global-require */
import React from 'react';
import './ProductDetails.scss';

function ProductDetails() {
  return (
    <div>
      <img className="pdp-img" alt="test" src={require('./1.png')} />
    </div>
  );
}

export default ProductDetails;
