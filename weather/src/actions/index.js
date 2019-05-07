import axios from 'axios';

const API_KEY = '904b7d174135c6c529d3f1982fcd24aa8699adb8' ;
const ROOT_URL = 'https://api.waqi.info/feed/' ;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}${city}/?token=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}