import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ value }) => {
  return <button>{value}</button>;
};

export default Button;

//PropTypes declaration
Button.propTypes = {
  value: PropTypes.string
};
