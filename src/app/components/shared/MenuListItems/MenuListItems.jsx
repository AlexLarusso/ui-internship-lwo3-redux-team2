/* eslint-disable react/prop-types */
import React from 'react';
import './MenuListItems.scss';

// eslint-disable-next-line react/prop-types
function MenuListItems({ menuItemsList, classes }) {
  return (
    <div className={`list-wrapper ${classes}`}>
      <ul className="list">
        { menuItemsList.map((el) => (<li key={el.itemName}><a className="list-link" href={el.link}>{ el.itemName }</a></li>))}
      </ul>
    </div>
  );
}
export default MenuListItems;
