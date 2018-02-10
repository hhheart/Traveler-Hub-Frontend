import { combineReducers } from 'redux';

import user from './user'

import reducer_test from './test';



const rootReducer = combineReducers({
  Test: reducer_test,
  user,
  
});

export default rootReducer;
