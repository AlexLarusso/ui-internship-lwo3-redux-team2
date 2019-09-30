import React from 'react';
import MenuListItems from '../../shared/MenuListItems/MenuListItems';
import { menuSeasons } from '../../../commonVariables/menuItems';
import './SeasonsNav.scss';

const SeasonsNav = () => (
  <MenuListItems menuItemsList={menuSeasons} classes="list__dark" />
);

export default SeasonsNav;
