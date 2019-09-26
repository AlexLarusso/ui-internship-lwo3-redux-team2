import React from "react";
import SocialNetworksIcons from "../../../shared/SocialNetworksIcons/SocialNetworksIcons";
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
        <SocialNetworksIcons />
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTopLine;
