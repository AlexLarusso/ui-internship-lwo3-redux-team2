import React from 'react';
import MenuListItems from '../../../shared/MenuListItems/MenuListItems';
import { menuSeasons } from '../../../../commonVariables/menuItems';

function SeasonsNav() {
  return (
    <MenuListItems menuItemsList={menuSeasons} classes="black-text-list" />
  );
}
export default SeasonsNav;
