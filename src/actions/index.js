import axios from 'axios';
import {browserHistory} from 'react-router';

const ROOT_URL = 'http://localhost:3080';

export function signupUser({user, password}){
  console.log('User is ', user);
  console.log('Password is', password);
}
