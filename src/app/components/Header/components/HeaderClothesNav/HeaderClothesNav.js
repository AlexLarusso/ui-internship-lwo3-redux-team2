import React from "react";
import "./HeaderClothesNav.scss";

function HeaderClothesNav() {
  return(
    <div className="list-wrapper">
      <ul className="list">
          <li><a className="list-link" href="#">Woman</a></li>
          <li><a className="list-link" href="#">Man</a></li>
          <li><a className="list-link" href="#">Children</a></li>
          <li><a className="list-link" href="#">Collection</a></li>
        </ul>
    </div>
  )
}
export default HeaderClothesNav;