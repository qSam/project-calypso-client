import {
  FETCH_USER_POOLS,
  SIGNIN_USER,
  SIGNOUT_USER
} from '../actions/types';

const INITIAL_STATE = { userSignedIn: false, userID:'', userPools: [] };

export default function (state=INITIAL_STATE, action) {

  switch(action.type) {
    case SIGNIN_USER:
      return {...state, userSignedIn:true , userID: action.payload };
    case SIGNOUT_USER:
      return {...state, userSignedIn:false, userID:''}
    case FETCH_USER_POOLS:
      return {...state, userPools: action.payload};
    default:
      return state;
  }
}
