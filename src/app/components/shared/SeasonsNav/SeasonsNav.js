import React from "react";
import "./SeasonsNav.scss";

function SeasonsNav() {
  return(
    <div className="list-wrapper">
      <ul className="list">
          <li><a className="list-link" href="#">Spring</a></li>
          <li><a className="list-link" href="#">Summer</a></li>
          <li><a className="list-link" href="#">Fall</a></li>
          <li><a className="list-link" href="#">Winter</a></li>
        </ul>
    </div>
  )
}
export default SeasonsNav;