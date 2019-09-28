/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import HeaderTopLine from './HeaderTopLine/HeaderTopLine';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderPromo from './HeaderPromo/HeaderPromo';
import HeaderShoppingMenu from './HeaderShoppingMenu/HeaderShoppingMenu';

function Header() {
  return (
    <div>
      <HeaderTopLine />
      <HeaderMenu />
      <HeaderPromo />
      <HeaderShoppingMenu />
    </div>
  );
}

export default Header;
