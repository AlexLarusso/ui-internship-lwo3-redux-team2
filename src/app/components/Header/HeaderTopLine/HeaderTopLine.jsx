import React from 'react';
import SocialNetworksIcons from '../../shared/SocialNetworksIcons/SocialNetworksIcons';
import Button from '../../shared/Button/Button';
import './HeaderTopLine.scss';

const HeaderTopLine = () => {
  const email = 'gaboo@gmail.com';
  const phoneNumber = '+12 345-678-90';

  return (
    <div className="header__line">
      <div className="content__container">
        <div className="col-12 header__wrapper">
          <div className="email-phone__wrapper">
            <div>{email}</div>
            <div>{phoneNumber}</div>
          </div>
          <div className="social-networks__wrapper">
            <SocialNetworksIcons />
            <Button buttonText="Login" classes="topLineButton" />
            <Button buttonText="Register" classes="topLineButton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopLine;
