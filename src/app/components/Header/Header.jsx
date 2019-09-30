import React from 'react';
import HeaderTopLine from './HeaderTopLine/HeaderTopLine';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderPromo from './HeaderPromo/HeaderPromo';
import HeaderShoppingMenu from './HeaderShoppingMenu/HeaderShoppingMenu';

const Header = () => (
  <div>
    <HeaderTopLine />
    <HeaderMenu />
    <HeaderPromo />
    <HeaderShoppingMenu />
  </div>
);

export default Header;
