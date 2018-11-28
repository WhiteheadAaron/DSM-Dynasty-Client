export const fetchGamesRequest = value => {
    return {
        type: 'GET_GAMES',
        value
    }
}

export const fetchGamesSuccess = value => {
    return {
        type: 'GET_GAMES_SUCCESS',
        value
    }
}

export const fetchGamesError = value => {
    return {
        type: 'GET_GAMES_ERROR',
        value
    }
}

export const getGamesAction = () => dispatch => {
    fetch('https://dsm-dynasty-server.herokuapp.com/games')
        .then(res => res.json())
        .then(res => dispatch(fetchGamesSuccess(res)))
        .catch(err => dispatch(fetchGamesError()))
}