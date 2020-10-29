import counterReducer from './counter.js';
import isLoggedIn from './loggedIn.js';
import formReducer from './formReducer.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers(
  {
    counter: counterReducer,
    isLoggedIn: isLoggedIn,
    form: formReducer
  }
);

export default allReducers;