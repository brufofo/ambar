import PropTypes from 'prop-types';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { changeCity } from '../../redux/citySlice';
// import axios from 'axios';

const Button = ({ value, teste }) => {
  // const dispatch = useDispatch();

  // async function teste() {
  //   const { data } = await axios.get('api.openweathermap.org/data/2.5/weather', {
  //     params: {
  //       q: 'london',
  //       units: 'metric',
  //       APPID: '0c6884cb2b8eec8f2c9ad9f739a35feb'
  //     }
  //   });

  //   return data;
  // }

  // async function weatherAPIcall() {
  //   // const x = await axios
  //   //   .get(
  //   //     'api.openweathermap.org/data/2.5/weather?q=london&appid=0c6884cb2b8eec8f2c9ad9f739a35feb'
  //   //   )
  //   //   .then((response) => console.log(response));
  //   // console.log(x);
  //   const data = await teste();
  //   console.log(data);
  // }

  // async function req() {
  //   await fetch(
  //     'https://api.openweathermap.org/data/2.5/weather?q=london&appid=0c6884cb2b8eec8f2c9ad9f739a35feb'
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // }

  // function selectCity(value) {
  //   dispatch(changeCity(value));
  // }
  // function teste(e) {
  //   console.log(e);
  //   onClick(e);
  // }

  return (
    <button value={value} onClick={() => teste('a')}>
      {/* <button value={value} onClick={(e) => selectCity(e.target.value)}> */}
      {value}
    </button>
  );
};

export default Button;

//PropTypes declaration
Button.propTypes = {
  value: PropTypes.string,
  teste: PropTypes.any
};
