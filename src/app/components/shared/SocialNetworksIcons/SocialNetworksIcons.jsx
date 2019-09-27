import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './SocialNetworksIcons.scss';

function SocialNetworksIcons() {
  const facebookIcon = <FontAwesomeIcon className="social-network-icon" icon={faFacebookF} />;
  const twitterIcon = <FontAwesomeIcon className="social-network-icon" icon={faTwitter} />;
  const googleIcon = <FontAwesomeIcon className="social-network-icon" icon={faGoogle} />;

  return (
    <div className="social-networks-icons-container">
      { facebookIcon }
      { twitterIcon }
      { googleIcon }
    </div>
  );
}
export default SocialNetworksIcons;
