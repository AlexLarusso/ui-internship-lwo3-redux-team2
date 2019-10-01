/* eslint-disable global-require */
import React from 'react';
import './ProductDetails.scss';
import '../../../styles/assets/img/products_img/product_picture_1.jpg';

const ProductDetails = () => (
  <div className="content-wrapper">
    <div className="images-container">
      <img src={require('../../../styles/assets/img/products_img/product_picture_1.jpg')} alt="Big" className="big-image" />
      <div className="small-images-container">
        <img src={require('../../../styles/assets/img/products_img/product_picture_2.jpg')} alt="Small" className="small-image" />
        <img src={require('../../../styles/assets/img/products_img/product_picture_3.jpg')} alt="Small" className="small-image" />
        <img src={require('../../../styles/assets/img/products_img/product_picture_4.jpg')} alt="Small" className="small-image" />
      </div>
    </div>
    <div className="item-details-wrapper">
      <h1 className="description-heading">Winter Collection - Paris Jacket</h1>
      <div className="horizontal-line" />
      <div className="price-container">$89.99</div>

      <div className="select-item-properties-container">
        <div className="select-item-prop">
          <select data-placeholder="Size" className="property-select">
            <option value="size">size</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="l">xl</option>
          </select>
        </div>

        <div className="select-item-prop">
          <span className="item-property-name">qty</span>
          <select data-placeholder="Select quantity" className="property-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <input type="checkbox" placeholder="color" />
        <button type="submit">Buy this item</button>
        <span>Detail</span>
        <p className="description-text">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
        <div className="dropdowns-wrapper">
          <div className="dropdown-container">
            <div className="dropdown-item">
              <div className="dropdown-title-wrapper">
                <div className="title-and-image">
                  <img src="./img/photo-icon.png" alt="" className="dropdown-icon" />
                  <span className="dropdown-title">photography</span>
                </div>
                <div className="dropdown-arrow-up" />
              </div>
              <p className="dropdown-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="dropdown-item">
              <div className="dropdown-title-wrapper">
                <div className="title-and-image">
                  <img src="./img/creativity-icon.png" alt="Creativity icon" className="dropdown-icon" />
                  <span className="dropdown-title">creativity</span>
                </div>
                <div className="dropdown-arrow-up" />
              </div>
              <p className="dropdown-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="dropdown-item">
              <div className="dropdown-title-wrapper">
                <div className="title-and-image">
                  <img src="./img/bull-icon.png" alt="Bull icon" className="dropdown-icon" />
                  <span className="dropdown-title">web-design</span>
                </div>
                <div className="dropdown-arrow-up" />
              </div>
              <p className="dropdown-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetails;
