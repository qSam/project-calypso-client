import {
  FETCH_USER_POOLS,
  SIGNIN_USER
} from '../actions/index';

const INITIAL_STATE = { userSignedIn: false, userID:'', userPools: [] };

export default function (state=INITIAL_STATE, action) {

  switch(action.type) {
    case SIGNIN_USER:
      console.log("I am inside this reducer");
      return {...state, userSignedIn:true , userID: action.payload };
    case FETCH_USER_POOLS:
      return {...state, userPools: action.payload};
    default:
      return state;
  }
}
