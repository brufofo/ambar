import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity, changeCityLocal, selectCity, setCityId } from '../../redux/citySlice';
import { getWeatherByCityName } from '../../api/openWeather';
import WeatherBox from '../../components/WeatherBox/WeatherBox';
import { useNavigate } from 'react-router-dom';
import { createObserver } from '../../firebase/utils';
import './MainPage.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxStateCity = useSelector(selectCity);
  const targetCity = useSelector((state) => state.city.cityId);

  async function handleCity(value) {
    try {
      const data = await getWeatherByCityName(value);
      dispatch(changeCity(data));
      dispatch(setCityId(data.cityId));
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    const listener = createObserver((data) => dispatch(changeCityLocal(data)));
    return () => {
      listener();
    };
  }, []);

  return (
    <div className="main-container">
      <div className="button-container" style={{ display: 'flex', gap: '10px' }}>
        <button className="main-button" value="London" onClick={(e) => handleCity(e.target.value)}>
          London
        </button>
        <button
          className="main-button"
          value="sao carlos"
          onClick={(e) => handleCity(e.target.value)}
        >
          São Carlos
        </button>
        <button className="main-button" value="Tokyo" onClick={(e) => handleCity(e.target.value)}>
          Tokyo
        </button>
      </div>
      <WeatherBox cityData={reduxStateCity.list?.[targetCity]} />
      {Object.keys(reduxStateCity).length > 0 && (
        <button className="main-button " onClick={() => navigate('/average')}>
          Show Average
        </button>
      )}
    </div>
  );
};

export default MainPage;
