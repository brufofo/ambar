import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../redux/citySlice';

const Button = ({ value }) => {
  const dispatch = useDispatch();

  function selectCity(value) {
    dispatch(changeCity(value));
  }

  return (
    <button value={value} onClick={(e) => selectCity(e.target.value)}>
      {value}
    </button>
  );
};

export default Button;

//PropTypes declaration
Button.propTypes = {
  value: PropTypes.string
};
