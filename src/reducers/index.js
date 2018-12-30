//@format
import {combineReducers} from 'redux';
import authReducer from './auth';
import soopReducer from './soop';

//this is the redux 'global' state
const rootReducer = combineReducers({
  auth: authReducer,
  soop: soopReducer
});

export default rootReducer;
