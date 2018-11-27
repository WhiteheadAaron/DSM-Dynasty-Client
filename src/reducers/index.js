import { combineReducers } from 'redux';
import filterReducer from './draft';
import gamesReducer from './games';


const rootReducer = combineReducers({
    filterReducer,
    gamesReducer
})

export default rootReducer;