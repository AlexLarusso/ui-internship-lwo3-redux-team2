import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fabFacebook, fabTwitter, fabGoogle } from '@fortawesome/free-brands-svg-icons';
import "./SocialNetworksIcons.scss";

function SocialNetworksIcons() {
  const facebookIcon = <FontAwesomeIcon icon={fabFacebook} />
  const twitterIcon = <FontAwesomeIcon icon={fabTwitter} />
  const googleIcon = <FontAwesomeIcon icon={fabGoogle} />

  return(
    <div className="social-networks-icons-container">
      SOCIAL NETWORKS ICONS
      {/* { facebookIcon }
      { twitterIcon }
      { googleIcon } */}
    </div>
  );
}
export default SocialNetworksIcons;