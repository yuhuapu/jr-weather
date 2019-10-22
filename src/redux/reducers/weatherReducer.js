import { CHANGE_LIMIT, FETCH_DATA,  FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions/weatherActions';

const initialState = {
    limit: 5,
    cityName: '',
    forecasts: [],
    current: {},
    isLoading: false,
    error: null,
};

const weatherReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return{
                ...state,
                limit: action.limit,
            };
        
        case FETCH_DATA:
            return{
                ...state,
                isLoading: true,
            };

        case FETCH_DATA_SUCCESS:
            console.log(action)
            return{
                ...state,
                isLoading: false,
                cityName: action.data.city.name,
                forecasts: action.data.forecasts,
                current: action.data.current,
            };
        
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                error: action.error,
                isLoading: false,
            };
    
        default:
            return state;
    }
};

export default weatherReducers;