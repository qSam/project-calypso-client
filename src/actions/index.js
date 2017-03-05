import axios from 'axios';
import {browserHistory} from 'react-router';
import {
  AUTH_ERROR,
  ADD_POOL_USERS,
  ADD_POOL_CONTACTS,
  ADD_POOL_DETAILS,
  FETCH_USER_POOLS,
  FETCH_SINGLE_POOL,
  SIGNIN_USER,
  SIGNOUT_USER,
  SET_CURRENT_POOL
} from './types';


const ROOT_URL = 'https://shrouded-mesa-18098.herokuapp.com';
//const ROOT_URL = 'http://localhost:3080';

export function signupUser({username, password}){

  return function(dispatch) {

    axios.post(`${ROOT_URL}/signup`,{username,password})
      .then( response => {
        //Dispatch Auth action to reducer
        dispatch({
          type: SIGNIN_USER,
          payload: {username}.username
        });

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

    axios.post(`${ROOT_URL}/signin`, {username,password})
      .then ( response => {
        //Dispatch Auth action to reducers
        dispatch({
          type: SIGNIN_USER,
          payload: {username}.username
        });

        //Redirect to home
        browserHistory.push('/home');

      })
      .catch( response => {
        console.log("Error :", response);
        dispatch({
          type:AUTH_ERROR,
          payload: 'Unable to login'
        })
      })
  }
}

export function signoutUser() {
  return { type: SIGNOUT_USER };
}

export function submitNewPool(values) {
  return function(dispatch){
    const ID = values.username;

    axios.post(`${ROOT_URL}/createPolicy/${ID}`,{
        "policyName": values.policyName,
        "totalAmount":  values.totalAmount,
        "policyLength": values.policyLength,
        "policyMembers": values.policyMembers
    })
    .then (response => {
      console.log("Policy successfully created");
      browserHistory.push('/home');
    })
    .catch (response => {
      console.log("Error: ",response);
    })
  }
}

export function addPoolUsers(numOfUsers){

  return function(dispatch) {
    dispatch({
      type:ADD_POOL_USERS,
      payload: numOfUsers
    })
  }
}

export function addPoolContacts(contacts){

  return function(dispatch) {
    dispatch({
      type:ADD_POOL_CONTACTS,
      payload: contacts
    })
  }
}

export function addPoolDetails(values){

  return function(dispatch) {
    dispatch({
        type: ADD_POOL_DETAILS,
        payload:values
    })
  }
}

export function getAllUserPools(ID) {
  return function(dispatch){
    axios.get(`${ROOT_URL}/getAllPolicies/${ID}`,{})
      .then(response => {
        dispatch({
          type: FETCH_USER_POOLS,
          payload: response.data
        });
      })
      .catch(response => {
        console.log("Error: ", response);
      })
  }
}

export function getSinglePool(poolObject) {

  const ID = poolObject.username;

  return function(dispatch) {
    axios.post(`${ROOT_URL}/fetchOnePolicy/${ID}`,{
      "policyID":poolObject.policyID
    })
    .then(response => {
      dispatch({
        type: FETCH_SINGLE_POOL,
        payload: response.data[0]
      });

    })
    .catch(response => {
      console.log("Error: ", response);
    })
  }

}

export function deletePool(deleteObject) {
  const ID = deleteObject.username;

  return function(dispatch) {
    axios.post(`${ROOT_URL}/deletePolicy/${ID}`,{
      "policyID": deleteObject.policyID
    })
    .then( response => {
      browserHistory.push('/home');
    })
    .catch(response => {
      console.log("Error: ",response);
    })
  }
}

export function sendEmail(email) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/sendEmail`, {
        "toEmail": email.toEmail
    })
    .then( response => {
      console.log("Email successful ", response);
    })
    .catch( response => {
      console.log("Error: ", response);
    })
  }
}

export function setCurrentPool(value) {
  return function(dispatch) {
    dispatch({
      type: SET_CURRENT_POOL,
      payload:value
    });

    //Reroute to list one component
    browserHistory.push('/listone');
  }
}
