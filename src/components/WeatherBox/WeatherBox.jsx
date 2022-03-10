import React from 'react';
import PropTypes from 'prop-types';

const WeatherBox = ({ cityData }) => {
  return (
    <div style={{ height: '400px', width: '400px', backgroundColor: 'gray' }}>
      <h1>{cityData.name}</h1>
      <h2>{cityData.temp}</h2>
      <p>Max:{cityData.temp_max}</p>
      <p>Min:{cityData.temp_min}</p>
    </div>
  );
};
export default WeatherBox;

//PropTypes declaration
WeatherBox.propTypes = {
  cityData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    feels_like: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number
  })
};
