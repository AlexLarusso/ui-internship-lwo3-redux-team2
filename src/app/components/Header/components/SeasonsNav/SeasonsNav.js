import React from "react";
import MenuListItems from '../../../shared/MenuListItems/MenuListItems.js';
import { menuSeasons } from '../../../../commonVariables/menuItems.js';
import "./SeasonsNav.scss";

function SeasonsNav() {
  return(
    <MenuListItems menuItemsList={menuSeasons} classes="black-text-list"/>
  )
}
export default SeasonsNav;