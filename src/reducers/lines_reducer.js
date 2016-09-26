const INITIAL_STATE = {
  line: ["nothing"]
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FETCH_SCRIPT':
      return state; 
    default:
      console.log("no lines")
      return state;
  }
}
