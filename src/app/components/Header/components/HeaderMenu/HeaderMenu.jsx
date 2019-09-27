import React from 'react';
import HeaderClothesNav from '../HeaderClothesNav/HeaderClothesNav';
import MainLogo from '../../../shared/MainLogo/MainLogo';
import SeasonsNav from '../SeasonsNav/SeasonsNav';
import './HeaderMenu.scss';

function HeaderMenu() {
  return (
    <div className="header-menu-container">
      <HeaderClothesNav />
      <MainLogo />
      <SeasonsNav />
    </div>
  );
}
export default HeaderMenu;
