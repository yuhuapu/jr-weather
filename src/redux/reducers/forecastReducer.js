const initialState = {
    limit: 5,
};

const changeLimit = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-LIMIT':
            return{
                ...state,
                limit: action.limit,
            };
    
        default:
            return state;
    }
};

export default changeLimit;