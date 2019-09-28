import React from 'react';
import SocialNetworksIcons from '../../shared/SocialNetworksIcons/SocialNetworksIcons';
import Button from '../../shared/Button/Button';
import './HeaderTopLine.scss';

function HeaderTopLine() {
  const email = 'gaboo@gmail.com';
  const phoneNumber = '+12 345-678-90';

  return (
    <div className="header__line">
      <div className="content__container">
        <div className="header__wrapper">
          <div className="email-phone__wrapper">
            <div>{email}</div>
            <div>{phoneNumber}</div>
          </div>
          <div className="social-networks__wrapper">
            <SocialNetworksIcons />
            <Button buttonText="Login" classes="top-line-btn" />
            <Button buttonText="Register" classes="top-line-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTopLine;
