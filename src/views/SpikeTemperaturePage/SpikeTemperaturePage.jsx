import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../../redux/citySlice';
import './SpikeTemperaturePage.css';

const SpikeTemperaturePage = () => {
  const navigate = useNavigate();
  const { list: reduxCity } = useSelector(selectCity);

  const [min, setMin] = useState();
  const [max, setMax] = useState();

  function calculeMinMax() {
    try {
      const maxAverage = Object.keys(reduxCity).reduce((prev, curr) => {
        return reduxCity[prev]?.temp_max > reduxCity[curr]?.temp_max ? prev : curr;
      });
      const minAverage = Object.keys(reduxCity).reduce((prev, curr) => {
        return reduxCity[prev]?.temp_min < reduxCity[curr]?.temp_min ? prev : curr;
      });
      setMin(reduxCity[minAverage]);
      setMax(reduxCity[maxAverage]);
    } catch (error) {
      console.log('Sem data para comparacao');
    }
  }

  useEffect(() => {
    calculeMinMax();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center ',
        height: ' 100vh',
        justifyContent: 'center'
      }}
    >
      {
        <div className="spike-container">
          <p>Minima: {min ? `${min.name} - ${min.temp_min.toFixed()} °C` : 'no data'}</p>
          <p>Maxima: {max ? `${max.name} - ${max.temp_max.toFixed()} °C` : 'no data'}</p>
        </div>
      }
      <button className="spike-button" onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
};

export default SpikeTemperaturePage;
