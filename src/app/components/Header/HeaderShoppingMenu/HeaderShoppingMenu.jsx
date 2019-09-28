import React from 'react';
import MenuListItems from '../../shared/MenuListItems/MenuListItems';
import { menuShopping } from '../../../commonVariables/menuItems';
import './HeaderShoppingMenu.scss';

const ShoppingMenu = () => (
  <div className="shopping-menu__wrapper">
    <div className="content__container shopping-menu__container">
      <div className="language-currency__wrapper">
        <div>
          <form>
            <select name="language-picker-select" id="language-picker-select">
              <option lang="en" value="english">EN</option>
              <option lang="de" value="deutsch">DE</option>
              <option lang="pl" value="polish">PL</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <select name="currency-picker-select" id="currency-picker-select">
              <option currency="usd" value="usd">USD</option>
              <option currency="eur" value="eur">EUR</option>
              <option currency="pln" value="pln">PLN</option>
            </select>
          </form>
        </div>
      </div>

      <MenuListItems menuItemsList={menuShopping} classes="list__light" />

      <input className="search-input" type="search" placeholder="Search..." />
      <div className="priceToPay">$79.00</div>
    </div>
  </div>
);

export default ShoppingMenu;

// https://codyhouse.co/blog/post/accessible-language-picker
