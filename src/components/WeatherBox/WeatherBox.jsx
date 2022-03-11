import React from 'react';
import PropTypes from 'prop-types';
import './WeatherBox.css';

const WeatherBox = ({ cityData }) => {
  return (
    <>
      {!cityData ? (
        <h1 style={{ color: 'white' }}>Please select a city to load some data..</h1>
      ) : (
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{cityData.name + '-' + cityData.country}</h1>
            <div>
              <img
                style={{ width: '200px' }}
                src={`http://openweathermap.org/img/wn/${cityData.icon}@2x.png`}
              ></img>
            </div>
          </div>
          <div className="container-info">
            <div>
              <p>Max: {cityData.temp_max.toFixed()} °C </p>
              <p>Min: {cityData.temp_min.toFixed()} °C </p>
            </div>
            <div>
              <h1>{cityData.temp.toFixed() + ' °C'}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default WeatherBox;

//PropTypes declaration
WeatherBox.propTypes = {
  cityData: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    icon: PropTypes.string,
    temp: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    cityId: PropTypes.number
  })
};
