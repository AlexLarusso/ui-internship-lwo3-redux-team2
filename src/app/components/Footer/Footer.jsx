/* eslint-disable global-require */
import React from 'react';
import Button from '../shared/Button/Button';
import SocialNetworksIcons from '../shared/SocialNetworksIcons/SocialNetworksIcons';
import './Footer.scss';

const Footer = () => (
  <div className="footer__container">
    <div className="content__container ">
      <div className="footer__wrapper">
        <div className="col-4">
          <img
            alt=""
            src={require('../../styles/assets/img/logo_light.png')}
            className="footer__logo col-6"
          />
          <p>
            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
          </p>
          <p>
            Created by Graphberry,Belgrade,Serbia
          </p>
        </div>
        <div className="col-2">
          <h4 className="footer__title">Links</h4>
          <ul>
            <li>Home</li>
            <li>Sign in</li>
            <li>Register</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="col-2">
          <h4 className="footer__title">Shopping</h4>
          <ul>
            <li>Shopping Cart</li>
            <li>Winter</li>
            <li>Spring</li>
            <li>Summer</li>
            <li>Fall</li>
            <li>Collection</li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="footer__title">Contact Us</h4>
          <p>
            Get in touch with us via mall phone. We are waiting for
            your call or message
          </p>

          <Button buttonText="Contact us" classes="defaultButton" />

          <SocialNetworksIcons />

        </div>
      </div>
    </div>
  </div>
);

export default Footer;
