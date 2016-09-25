import axios from 'axios';

const ROOT_URL = 'http://localhost:3001'

export const NEW_SESSION = "NEW_SESSION";
export const NEW_USER = "NEW_USER";
export const UPLOAD_SCRIPT = "UPLOAD_SCRIPT";
export const FETCH_SCRIPT = "FETCH_SCRIPT";
export const DELETE_SCRIPT = "DELETE_SCRIPT";
//
// export function createSession(props){
//
//   console.log("createSession props below")
//   console.log(props)
//   console.log("createSession props above")
//
//   let email = props.user_email;
//   let password = props.password;
//   var result = [];
//
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/sessions/create`,
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
//     data: {
//       email: email,
//       password: password
//     }
//   }).then(function(response){
//     result.push(response)
//   })
//     return {
//       type: NEW_SESSION,
//       payload: result
//     };
// }
//
// export function createUser(props){
//   console.log("createUser props below")
//   console.log(props)
//   console.log("createUser props above")
//
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/users/create`,
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
//     data: {
//       email: email,
//       password: password
//     }
//   })
//   return {
//     type: NEW_USER,
//     payload: reqest
//   }
// }
//
// export function uploadScript(props){
//
//   console.log("uploadScript props below")
//   console.log(props)
//   console.log("uploadScript props above")
//
//   const request = axios({
//     method: 'post',
//     url: `${ROOT_URL}/uploads`,
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
//     // data: {
//     //   email: email,
//     //   password: password
//     // }
//   })
//   return{
//     type: UPLOAD_SCRIPT,
//     payload: request
//   }
// }
//
// export function fetchScript(props){
//   console.log("fetchScript props below")
//   console.log(props)
//   console.log("fetchScript props above")
//
//   const request = axios({
//     method: 'get',
//     url: `${ROOT_URL}/scripts/`,
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
//     // data: {
//     //   email: email,
//     // }
//   })
//
//   return{
//     type: FETCH_SCRIPT,
//     payload: request
//   }
// }
//
// export function deleteScript(props){
//   console.log("deleteScript props below")
//   console.log(props)
//   console.log("deleteScript props above")
//   const request = axios({
//     method: 'delete',
//     url: `${ROOT_URL}/users/create`,
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
//     // data: {
//     //   email: email,
//     //   password: password
//     // }
//   })
//   return{
//     type: DELETE_SCRIPT,
//     payload: request
//   }
// }

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
    let session;
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
