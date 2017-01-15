import {
  FETCH_USER_POOLS
} from '../actions/index';

const INITIAL_STATE = { userPools: [] };

export default function (state=INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_USER_POOLS:
      return {...state, userPools: action.payload};
    default:
      return state;
  }
}
