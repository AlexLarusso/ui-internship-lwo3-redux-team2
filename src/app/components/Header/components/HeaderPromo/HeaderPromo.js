import React from "react";
import "./HeaderPromo.scss";

function HeaderPromo() {
  return <div className="header-promo-container">
    <div className="promo-text-container">
      <h1 className="promo-header">fashion that likes to say yes</h1>
      <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
    </div>
    <div className="image-container">
      {/* <img src={require('./logo.jpeg')} /> */}
    </div>
  </div>;
}
export default HeaderPromo;