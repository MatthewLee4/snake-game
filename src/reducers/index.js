import counterReducer from './counter';
import loggedReducer from './isLogged';
import playerName from './name';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    playerName: playerName
})

export default allReducers;