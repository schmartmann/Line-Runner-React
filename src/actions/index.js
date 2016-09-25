import axios from 'axios';

const ROOT_URL = 'http://localhost:3001'

export const NEW_SESSION = "NEW_SESSION";
export const NEW_USER = "NEW_USER";
export const UPLOAD_SCRIPT = "UPLOAD_SCRIPT";
export const FETCH_SCRIPT = "FETCH_SCRIPT";
export const DELETE_SCRIPT = "DELETE_SCRIPT";


export function createSessionOptimistic(props){
  return {
    type: NEW_SESSION,
    payload: props
  }
}

export function createSession(props){
  return function(dispatch){
    console.log(props)
    let email = props.user_email;
    let password = props.password;

    axios({
      method: 'post',
      url: `${ROOT_URL}/sessions/create`,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      data: {
        email: email,
        password: password
      }
    }).then(response => {
      props = response.data.email
      console.log(props)
      dispatch(createSessionOptimistic(props));
    }).catch(err => {
      console.log(err)
    });
    return null;
  }
}
export function createUserOptimistic(props){
  return {
    type: NEW_USER,
    payload: props
  }
}

export function createUser(props){
  return function(dispatch){
    console.log(props)
    let email = props.user_email;
    let password = props.password;
    axios({
      method: 'post',
      url: `${ROOT_URL}/users/create`,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      data: {
        email: email,
        password: password
      }
    }).then(response => {
      props = response.data.email
      console.log(props)
      dispatch(createUserOptimistic(props));
    }).catch(err => {
      console.log(err)
    });
    return null;
  }
}
