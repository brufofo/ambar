import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity, selectCity } from '../../redux/citySlice';
import { getWeatherByCityName } from '../../api/openWeather';
import WeatherBox from '../../components/WeatherBox/WeatherBox';

const MainPage = () => {
  const dispatch = useDispatch();

  const [selectedCityData, setSelectedCityData] = useState(useSelector(selectCity));

  async function handleCity(value) {
    try {
      const data = await getWeatherByCityName(value);
      dispatch(changeCity(data));
      setSelectedCityData({ name: data.name, ...data.main });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-container">
      <div className="button-container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <button value="London" onClick={(e) => handleCity(e.target.value)}>
          London
        </button>
        <button value="sao carlos" onClick={(e) => handleCity(e.target.value)}>
          Sao Carlos
        </button>
        <button value="Tokyo" onClick={(e) => handleCity(e.target.value)}>
          Tokyo
        </button>
      </div>
      <WeatherBox cityData={selectedCityData} />
    </div>
  );
};

export default MainPage;
