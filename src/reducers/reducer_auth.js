import {
  AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {

  switch(action.type){
    case AUTH_ERROR:
      return {...state, error:action.payload};
    default:
      return state;
  }
}
