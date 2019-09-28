import React from 'react';
import MenuListItems from '../../shared/MenuListItems/MenuListItems';
import { menuClothes } from '../../../commonVariables/menuItems';
import './HeaderClothesNav.scss';

const HeaderClothesNav = () => (
  <div className="menu__wrapper">
    <MenuListItems menuItemsList={menuClothes} classes="list__dark" />
  </div>
);

export default HeaderClothesNav;
