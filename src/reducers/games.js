const initialState = {
    games: [],
    loading: false,
    error: null
}

const gameReducer = (state = initialState, action) => {
    if (action.type === 'GET_GAMES') {
        return Object.assign({}, state, {
            loading: true
        })
    }
    if (action.type === 'GET_GAMES_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            error: true
        })
    }
    if (action.type === 'GET_GAMES_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            games: action.value
        })
    }
    else {
        return state;
    }
}

export default gameReducer;