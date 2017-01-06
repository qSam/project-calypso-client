import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {

  switch(action.type){
    case AUTH_ERROR:
      return {...state, error:action.payload};
  }

  return state;
}
