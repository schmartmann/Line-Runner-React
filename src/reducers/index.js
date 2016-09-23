import { combineReducers } from 'redux';
import LinesReducer from './lines_reducer';
import SessionsReducer from './sessions_reducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  lines: LinesReducer
})

export default rootReducer;
