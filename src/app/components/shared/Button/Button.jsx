import React from 'react';
import './Button.scss';

function Button({ buttonText, eventHandler, classes }) {
  return (
    <button className={classes} onClick={eventHandler}>{ buttonText }</button>
  );
}

export default Button;
