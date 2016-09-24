const INITIAL_STATE = {
  user_email: undefined,
  password: undefined
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'NEW_SESSION':
      console.log(action.payload)
      return {...state, user_email: action.payload.data}
    case 'END_SESSION':
      return { user_email: undefined}
    default:
      console.log("no session")
      return state;
  }
}
