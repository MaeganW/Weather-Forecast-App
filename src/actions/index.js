import axios from 'axios';

const API_KEY = 'b9f506622459d95aa4b93d84d23d8541';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const req = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: req,
  };
}
