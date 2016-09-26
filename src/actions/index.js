import axios from 'axios';

const ROOT_URL = 'http://localhost:3001'

export const NEW_SESSION = "NEW_SESSION";
export const NEW_USER = "NEW_USER";
export const END_SESSION = "END_SESSION";
export const UPLOAD_SCRIPT = "UPLOAD_SCRIPT";
export const FETCH_SCRIPT = "FETCH_SCRIPT";
export const DELETE_SCRIPT = "DELETE_SCRIPT";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const CREATE_FAILURE = "CREATE_FAILURE";

export function createSessionOptimistic(props){
  return {
    type: NEW_SESSION,
    payload: props
  }
}

export function sessionLoginFailure(){
    return {
      type: LOGIN_FAILURE,
      payload: true
    }
}

export function logOut(){
  return {
    type: END_SESSION,
    payload: undefined
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
      console.log(response)
      if (response.data === "error!"){
        dispatch(sessionLoginFailure());
      } else {
        props = response.data.email
        dispatch(createSessionOptimistic(props));
      }
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

export function createUserFailure(){
  return {
    type: CREATE_FAILURE,
    payload: true
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
      console.log(response)
      if (response.data === "error!"){
        dispatch(createUserFailure());
      } else {
        props = response.data.email
        dispatch(createUserOptimistic(props));
      }
    }).catch(err => {
      console.log(err)
    });
    return null;
  }
}

export function fetchScriptsOptimistic(props){
  return {
    type: FETCH_SCRIPT,
    payload: props
  }
}


export function fetchScripts(props){
  return function(dispatch){
    console.log(props)
    let email = props.email;
    const request = axios.get(`${ROOT_URL}/uploads/return/${email}`)
    console.log(request)
    var result = {
      id:1,
      user: "stefan",
      project: "stefan's script",
      script_line: "listen up fuckos"
    }
    // for (var i = 0; i < request.length; i++){
      dispatch(fetchScriptsOptimistic(result))
    // }
    return null;
  }
}
