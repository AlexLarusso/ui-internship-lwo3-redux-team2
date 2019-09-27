import React from "react";
import "./MenuListItems.scss";

function MenuListItems({ menuItemsList, classes }) {

  return(
    <div className={`list-wrapper ${classes}`}>
      <ul className="list">
        { menuItemsList.map((el) => {
          return(<li key={el.itemName}><a className="list-link" href={ el.link }>{ el.itemName }</a></li>);
        })}
      </ul>
    </div>
  )
}
export default MenuListItems;