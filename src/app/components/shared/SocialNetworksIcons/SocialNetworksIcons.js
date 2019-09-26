import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./SocialNetworksIcons.scss";

function SocialNetworksIcons() {
  const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
  const googleIcon = <FontAwesomeIcon icon={faGoogle} />

  return(
    <div className="social-networks-icons-container">
      { facebookIcon }
      { twitterIcon }
      { googleIcon }
    </div>
  );
}
export default SocialNetworksIcons;