import React from 'react';
import MenuListItems from '../../../shared/MenuListItems/MenuListItems';
import { menuShopping } from '../../../../commonVariables/menuItems';
import './HeaderShoppingMenu.scss';

function ShoppingMenu() {
  return (
    <div className="shopping-menu-wrapper">
      <div className="language-currency-wrapper">
        <div className="language-picker js-language-picker">
          <form className="language-picker__form">
            <select name="language-picker-select" id="language-picker-select">
              <option lang="en" value="english">EN</option>
              <option lang="de" value="deutsch">DE</option>
              <option lang="fr" value="francais">PL</option>
            </select>
          </form>
        </div>
        <div className="currency-picker js-currency-picker">
          <form className="currency-picker__form">
            <select name="currency-picker-select" id="currency-picker-select">
              <option currency="usd" value="usd">USD</option>
              <option currency="eur" value="eur">EUR</option>
              <option currency="pln" value="pln">PLN</option>
            </select>
          </form>
        </div>
      </div>

      <MenuListItems menuItemsList={menuShopping} classes="white-text-list" />

      <input className="search-input" type="search" placeholder="Search..." />
      <div className="priceToPay">$79.00</div>
    </div>
  );
}

export default ShoppingMenu;

// https://codyhouse.co/blog/post/accessible-language-picker
