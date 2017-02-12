import {
  FETCH_USER_POOLS,
  FETCH_SINGLE_POOL,
  SIGNIN_USER,
  SIGNOUT_USER,
  SET_CURRENT_POOL
} from '../actions/types';

const INITIAL_STATE = { userSignedIn: false, userID:'',
                        userPools: [], currentPoolID:'',currentPool:[] };

export default function (state=INITIAL_STATE, action) {

  switch(action.type) {
    case SIGNIN_USER:
      return {...state, userSignedIn:true , userID: action.payload };
    case SIGNOUT_USER:
      return {...state, userSignedIn:false, userID:''};
    case FETCH_USER_POOLS:
      return {...state, userPools: action.payload};
    case FETCH_SINGLE_POOL:
      return {...state, currentPool: action.payload};
    case SET_CURRENT_POOL:
      return {...state, currentPoolID: action.payload};
    default:
      return state;
  }
}
