import axios from 'axios';
import {browserHistory} from 'react-router';

const ROOT_URL = 'http://localhost:3080';

export function signupUser({user, password}){

  return function(dispatch) {
    console.log('User is ', {user});
    console.log('Password is', {password});
  };

}

export function signinUser({user,password}){

  return function(dispatch) {
    console.log('Sign In User is ', {user});
    console.log('Sign In Password is ', {password});
  }
}
