const initialState = {
    filter: null
}

const filterReducer = (state = initialState, action) => {
    if (action.type === 'FILTER') {
        return Object.assign({}, state, {
            filter: action.value
        })
    }
    else {
        return state;
    }
}

export default filterReducer;