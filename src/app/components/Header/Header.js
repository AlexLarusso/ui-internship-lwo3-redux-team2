import React from "react";
import HeaderTopLine from "./components/HeaderTopLine/HeaderTopLine.js";
import HeaderMenu from "../Header/components/HeaderMenu/HeaderMenu.js";
import HeaderPromo from "../Header/components/HeaderPromo/HeaderPromo.js";

function Header() {
  return <div>
    <HeaderTopLine />
    <HeaderMenu />
    <HeaderPromo />
  </div>;
}
export default Header;