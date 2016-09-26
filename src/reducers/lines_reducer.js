const INITIAL_STATE = {
  line: ["Select 'Add New Script' to get started."]
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FETCH_SCRIPT':
      return {line: [action.payload]};
    case 'FETCH_SCRIPT_ERROR':
      console.log(action)
      return {line: [action.payload]}
    default:
      console.log("no lines")
      return state;
  }
}
