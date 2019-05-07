import{ combineReducers } from 'redux';
import Weather from './weather_reducers';

const rootReducer = combineReducers({
    weather: Weather
});

export default rootReducer;
