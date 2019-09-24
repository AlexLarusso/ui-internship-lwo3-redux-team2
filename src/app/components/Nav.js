import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return(
    <nav>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Product list</li>
        </Link>
        <Link to="/productsdetail">
          <li>Product detail</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;