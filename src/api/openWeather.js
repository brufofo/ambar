import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { changeCity } from '../redux/citySlice';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0c6884cb2b8eec8f2c9ad9f739a35feb';

export async function getWeatherByCityName(city) {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: 'metric',
      APPID: API_KEY
    }
  });

  return data;
}
