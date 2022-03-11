import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getWeatherByCityName(city) {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: 'metric',
      APPID: API_KEY
    }
  });
  const newData = {
    name: data.name,
    cityId: data.id,
    icon: data.weather[0]?.icon,
    iconId: data.weather[0]?.id,
    country: data.sys.country,
    temp: data.main.temp,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max
  };

  return newData;
}
