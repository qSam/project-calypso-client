import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import AuthReducer from './reducer_auth';
import PoolReducer from './reducer_pool';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  form:form,
  auth:AuthReducer,
  pool:PoolReducer,
  user:UserReducer
});

export default rootReducer;
