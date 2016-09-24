import { combineReducers } from 'redux';
import LinesReducer from './lines_reducer';
import SessionsReducer from './sessions_reducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: formReducer,
  session: SessionsReducer,
  lines: LinesReducer
})

export default rootReducer;
