import React, { Component } from 'react';

class UserPanel extends Component {
  render() {
    return (
      <nav className="user-panel">
        <div className="select-language">
          <span>| |</span>
          <select>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option selected value="coconut">
              Кокос
            </option>
            <option value="mango">Манго</option>
          </select>
        </div>

        <div className="select-currency">
          <select>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option selected value="coconut">
              Кокос
            </option>
            <option value="mango">Манго</option>
          </select>
          <nav>
<a>Shopping Cart</a>
<a>Shopping Cart</a>
<a>Checkout</a>
<a>My Account</a>
          </nav>
        </div>
      </nav>
    );
  }
}

export default UserPanel;
