import React from "react";
// import SocialNetworksIcons from "../SocialNetworksIcons/SocialNetworksIcons.js";
import "./HeaderTopLine.scss";

function HeaderTopLine() {
  const email = "gaboo@gmail.com";
  const phoneNumber = "+12 345-678-90";

  return (
    <div className="header-top-line">
      <div className="header-top-line-content-wrapper">
        <div>
          {email}
          {phoneNumber}
        </div>
        {/* <SocialNetworksIcons /> */}
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default HeaderTopLine;
