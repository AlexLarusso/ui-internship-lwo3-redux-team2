import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ buttonText, eventHandler, classes }) => (
  <button type="submit" className={classes} onClick={eventHandler}>
    {buttonText}
  </button>
);

Button.propTypes = {
  buttonText: PropTypes.string,
  eventHandler: PropTypes.func,
  classes: PropTypes.string,
};

Button.getDefaultProps = {
  buttonText: '',
  eventHandler: () => 'onclick',
  classes: '',
};

export default Button;
