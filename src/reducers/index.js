import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailsReducer from './detailsReducer';

// Combine all reducers to one root reducer
const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default rootReducer;
