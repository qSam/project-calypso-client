import {ADD_POOL_USERS} from '../actions/index';

const INITIAL_STATE = { totalMembers : 0 };

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_POOL_USERS:
      return { ...state, totalMembers: action.payload}
    default:
      return state;
  }
}
