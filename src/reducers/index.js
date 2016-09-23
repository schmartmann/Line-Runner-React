import { combineReducers } from 'redux';
import LinesReducer from './lines_reducer';

const rootReducer = combineReducers({
  lines: LinesReducer
})

export default rootReducer; 
