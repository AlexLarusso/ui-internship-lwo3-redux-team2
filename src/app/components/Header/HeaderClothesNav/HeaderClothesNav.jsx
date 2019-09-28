import React from 'react';
import MenuListItems from '../../shared/MenuListItems/MenuListItems';
import { menuClothes } from '../../../commonVariables/menuItems';
import './HeaderClothesNav.scss';

function HeaderClothesNav() {
  return (
    <div className="menu-wrapper">
      <MenuListItems menuItemsList={menuClothes} classes="black-text-list" />
    </div>
  );
}
export default HeaderClothesNav;
