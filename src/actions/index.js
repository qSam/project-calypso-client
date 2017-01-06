import axios from 'axios';
import {browserHistory} from 'react-router';

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
        console.log("Error :", response.data.error);
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
