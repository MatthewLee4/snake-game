import counterReducer from './counter';
import loggedReducer from './isLogged';
import playerName from './name';
import snakeColor from './snake_color';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    playerName: playerName,
    snake_color: snakeColor
})

export default allReducers;