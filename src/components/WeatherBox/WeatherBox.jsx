import React from 'react';
import PropTypes from 'prop-types';

const WeatherBox = ({ cityData }) => {
  return (
    <>
      {!cityData ? (
        <h1>Please select a city to load some data..</h1>
      ) : (
        <div
          style={{
            height: '400px',
            width: '400px',
            backgroundColor: '#8080804d',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{cityData.name + '-' + cityData.country}</h2>
            <img
              style={{ width: '50px' }}
              src={`http://openweathermap.org/img/wn/${cityData.icon}@2x.png`}
            ></img>
            <h1>{cityData.temp.toFixed() + ' °C'}</h1>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              padding: '0px 10px'
            }}
          >
            <p>Max: {cityData.temp_max.toFixed()} °C </p>
            <p>Min: {cityData.temp_min.toFixed()} °C </p>
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
