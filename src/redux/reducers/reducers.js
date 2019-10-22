import { combineReducers } from 'redux';

import weatherReducers from './weatherReducer'

export default combineReducers({
    weather: weatherReducers,
});