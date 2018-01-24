import { combineReducers } from 'redux';
import reducer_test from './test';


const rootReducer = combineReducers({
  Test: reducer_test
});

export default rootReducer;
