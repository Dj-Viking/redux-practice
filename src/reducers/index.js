import counterReducer from './counter.js';
import isLogged from './loggedIn.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers(
  {
    counter: counterReducer,
    isLogged: isLogged
  }
);

export default allReducers;