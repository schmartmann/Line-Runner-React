const INITIAL_STATE = {
  user_email: undefined,
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'NEW_SESSION':
      return {user_email: action.payload}
    case 'NEW_USER':
      return {user_email: action.payload}
    case 'END_SESSION':
      return { user_email: undefined}
    default:
      console.log("no session")
      return state;
  }
}
