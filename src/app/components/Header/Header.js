import React, { Component } from 'react';
import TopBanner from './TopBanner/TopBanner';
import Menu from './Menu/Menu';
import UserPanel from './UserPanel/UserPanel';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <TopBanner /> 
        <Menu />
        <UserPanel /> 
      </div>
    );
  }
}

export default Header;
