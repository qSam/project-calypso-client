import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import AuthReducer from './reducer_auth';
import PoolReducer from './reducer_pool';

const rootReducer = combineReducers({
  form:form,
  auth:AuthReducer,
  pool:PoolReducer
});

export default rootReducer;
