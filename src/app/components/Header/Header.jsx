import React from 'react';
import HeaderTopLine from './components/HeaderTopLine/HeaderTopLine';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import HeaderPromo from './components/HeaderPromo/HeaderPromo';
import HeaderShoppingMenu from './components/HeaderShoppingMenu/HeaderShoppingMenu';

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
