import React from "react";
import MenuListItems from '../../../shared/MenuListItems/MenuListItems.js';
import { menuClothes } from '../../../../commonVariables/menuItems.js';
import "./HeaderClothesNav.scss";

function HeaderClothesNav() {
  return(
    <div className="menu-wrapper">
      <MenuListItems menuItemsList={menuClothes} classes="black-text-list"/>
    </div>
  )
}
export default HeaderClothesNav;