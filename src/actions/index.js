import axios from 'axios';

const CREATE_SESSION_URL = 'http://localhost:3001/sessions/create';
const CREATE_USER_URL = 'http://localhost:3001/users/create';
const UPLOAD_SCRIPT_URL = 'http://localhost:3001/uploads';

export const NEW_SESSION = 'NEW_SESSION';
export const NEW_USER = 'NEW_USER';
export const UPLOAD_SCRIPT = 'UPLOAD_SCRIPT';

export function createSession(user, password){
  const request = axios.post(`${CREATE_SESSION_URL}?email=${user}&password=${password}`);
  return {
    type: NEW_SESSION,
    payload: request
  };
}

export function createUser(user, password){
  this.preventDefault();
  const request = axios.post(`${CREATE_USER_URL}?email=${user}&password=${password}`);
  return {
    type: NEW_USER,
    payload: request
  };
}

export function uploadScript(){
  const request = axios.post(`${UPLOAD_SCRIPT_URL}`);

  return {
    type: UPLOAD_SCRIPT,
    payload: request
  };
}
