const INITIAL_STATE = {
  user_email: undefined,
  loginFailure: false,
  createAccountFailure: false
};

export default function(state = INITIAL_STATE, action){
  console.log(action)
  switch(action.type){
    case 'NEW_SESSION':
      return {user_email: action.payload}
    case 'LOGIN_FAILURE':
      return {loginFailure: action.payload};
    case 'NEW_USER':
      return {user_email: action.payload}
    case 'CREATE_FAILURE':
      return {createAccountFailure: action.payload}
    case 'END_SESSION':
      return { user_email: undefined}
    default:
      console.log("no session")
      return state;
  }
}
