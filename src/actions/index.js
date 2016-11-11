import axios from 'axios';

const ROOT_URL = 'http://localhost:3001'
// const ROOT_URL = 'https://cecf3040.ngrok.io'

export const NEW_SESSION = "NEW_SESSION";
export const NEW_USER = "NEW_USER";
export const END_SESSION = "END_SESSION";
export const UPLOAD_SCRIPT = "UPLOAD_SCRIPT";
export const FETCH_SCRIPT = "FETCH_SCRIPT";
export const FETCH_SCRIPT_ERROR = "FETCH_SCRIPT_ERROR";
export const CLEAR_SCRIPTS = "CLEAR_SCRIPTS";
export const DELETE_SCRIPT = "DELETE_SCRIPT";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const CREATE_FAILURE = "CREATE_FAILURE";
export const FETCH_PROJECTS = "FETCH_PROJECTS";

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
      crossDomain: true,
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
      crossDomain: true,
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

export function fetchScriptsError(props){
  return {
    type: FETCH_SCRIPT_ERROR,
    payload: props
  }
}


export function fetchScripts(props){
  return function(dispatch){
    console.log(props)
    let email = props;
    axios({
      method: 'get',
      url: `${ROOT_URL}/uploads?${email}`,
      crossDomain: true,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    }).then(response => {
      if (response.data[0].length === 0){
        console.log("its blank -_-")
        let lines = "It doesn't look like you have any scripts uploaded yet."
        dispatch(fetchScriptsError(lines))
      } else {
        console.log(response.data[0])
        let lines = response.data[0]
        dispatch(fetchScriptsOptimistic(lines))
        };
      })
      .catch(err => {
        console.log(err)
      });
      return null;
    }
  }

export function clearScripts(){
  return {
    type: CLEAR_SCRIPTS,
    payload: "Select 'Add New Script' to get started."
  }
}


export function fetchProjectsOptimistic(props){
  console.log("fetchProjectsOptimistic", props)
  return {
    type: FETCH_PROJECTS,
    payload: props
  }
}

export function fetchProjects(props){
  return function(dispatch){
    let email = props;
    axios({
      method: 'get',
      url: `${ROOT_URL}/uploads/projects?${email}`,
      crossDomain: true,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    }).then(response => {
      let responseArr = response.data
      let projectsArr = []
      for (var i = 0; i <responseArr.length; i++){
        projectsArr.push(responseArr[i].project)
      }
      console.log("get request for projects", projectsArr)
      dispatch(fetchProjectsOptimistic(projectsArr))
    })
  }
}
