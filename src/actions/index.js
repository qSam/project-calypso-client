import axios from 'axios';
import {browserHistory} from 'react-router';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';


const ROOT_URL = 'http://localhost:3080';

export function signupUser({username, password}){

  return function(dispatch) {
    console.log('User is ', {username});
    console.log('Password is', {password});

    axios.post(`${ROOT_URL}/signup`,{username,password})
      .then( response => {
        //Dispatch Auth action to reducer

        //Redirect to home
        browserHistory.push('/home');

      })
      .catch( response => {
        console.log("Error :", response);
        dispatch({
          type:AUTH_ERROR,
          payload: 'Unable to create user account. User name may already be in use.'
        })
      })
  };

}

export function signinUser({username,password}){

  return function(dispatch) {
    console.log('Sign In User is ', {username});
    console.log('Sign In Password is ', {password});

    axios.post(`${ROOT_URL}/signin`, {username,password})
      .then ( response => {
        //Dispatch Auth action to reducers

        //Redirect to home
        browserHistory.push('/home');
      })
      .catch( response => {
        console.log("Error :", response.data.error);
      })
  }
}
