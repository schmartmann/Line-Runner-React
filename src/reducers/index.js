import { combineReducers } from 'redux';
import LinesReducer from './lines_reducer';
import thunk from 'redux-thunk';
import SessionsReducer from './sessions_reducer';


const rootReducer = combineReducers({
  session: SessionsReducer,
  lines: LinesReducer
})

export default rootReducer;
