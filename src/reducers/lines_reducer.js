const INITIAL_STATE = {
  projects: [],
  line: ["Select 'Add New Script' to get started, or 'Open Saved Script' to resume playback."]
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FETCH_SCRIPT':
      return {line: [action.payload]};
    case 'FETCH_SCRIPT_ERROR':
      console.log(action)
      return {line: [action.payload]}
    case 'CLEAR_SCRIPTS':
      return {
        projects: [],
        line: [action.payload]
      }
    case 'FETCH_PROJECTS':
    console.log("FETCHPROJECTS", action)
    console.log("FETCHPROJECTS is a ", typeof action.payload)
      return {
        projects: action.payload,
        line: ["Select 'Add New Script' to get started, or 'Open Saved Script' to resume playback."]
      }
    default:
      console.log("no lines")
      return state;
  }
}
