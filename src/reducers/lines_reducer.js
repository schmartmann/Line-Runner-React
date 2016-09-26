const INITIAL_STATE = {
  line: ["nothing"]
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FETCH_SCRIPT':
      return state;
    case 'FETCH_SCRIPT_ERROR':
      console.log(action)
      return {line: [action.payload]}
    default:
      console.log("no lines")
      return state;
  }
}
