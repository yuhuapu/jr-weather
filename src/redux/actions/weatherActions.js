import { getWeatherFor } from '../../utils/axios';

export const CHANGE_LIMIT = 'CHANGE-LIMIT';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const changeLimitAction = limit => ({
    limit,
    type: CHANGE_LIMIT,
});

export const fetchData = () => ({
    type: FETCH_DATA,
});

export const fetchDataSuccess = data => ({
    data,
    type: FETCH_DATA_SUCCESS,
});

export const fetchDataFailure = error => ({
    error,
    type: FETCH_DATA_FAILURE,
});

export const loadWeather = city => (dispatch, getState) => {
    dispatch(fetchData());

    return getWeatherFor(city)
        .then(data => dispatch(fetchDataSuccess(data)))
        .catch(error => dispatch(fetchDataFailure(error)));
};