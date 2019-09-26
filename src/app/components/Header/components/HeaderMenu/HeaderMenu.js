import React from "react";
import HeaderClothesNav from "../HeaderClothesNav/HeaderClothesNav.js";
import MainLogo from "../../../shared/MainLogo/MainLogo.js";
import SeasonsNav from "../../../shared/SeasonsNav/SeasonsNav.js";
import "./HeaderMenu.scss";

function HeaderMenu() {
  return <div className="header-menu-container">
    <HeaderClothesNav />
    <MainLogo />
    <SeasonsNav />
  </div>;
}
export default HeaderMenu;