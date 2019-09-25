import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG
} from '@fortawesome/free-brands-svg-icons';

class TopBanner extends Component {
  render() {
    return (
      <nav className="top-banner">
        <div className="contact-info">
          <span className="contact-info-item">gabooo@mail.com</span>
          <span className="contact-info-item">+12 345-678-90</span>
        </div>
        <div className="social-media-links">
          <a href="#" className="social-media-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-media-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-media-link">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
        </div>
        <div className="registration-links">
          <a href="#" className="social-media-link">
            Login
          </a>
          <a href="#" className="social-media-link">
            Register
          </a>
        </div>
      </nav>
    );
  }
}

export default TopBanner;
