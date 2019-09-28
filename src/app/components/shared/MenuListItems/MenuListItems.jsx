import React from 'react';
import PropTypes from 'prop-types';
import './MenuListItems.scss';

function MenuListItems({ menuItemsList, classes }) {
  return (
    <div className={`${classes}`}>
      <ul className="list">
        {menuItemsList
          .map((el) => (
            <li key={el.itemName}>
              <a className="list__link" href={el.link}>{el.itemName}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

MenuListItems.propTypes = {
  menuItemsList: PropTypes.instanceOf(Array),
  classes: PropTypes.string,
};

MenuListItems.getDefaultProps = {
  menuItemsList: [],
  classes: '',
};

export default MenuListItems;
