import counterReducer from './counter';
import loggedReducer from './isLogged';
import todos from './TodoReducer';
import visibilityFilter from './FilterReducer'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    todos,
    visibilityFilter
});

export default allReducers;