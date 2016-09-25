const INITIAL_STATE = {
  user_email: undefined,
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'NEW_SESSION':
      console.log(action)
      console.log(state)
      return {user_email: action.payload}
      console.log(state)
    case 'END_SESSION':
      return { user_email: undefined}
    default:
      console.log("no session")
      return state;
  }
}
