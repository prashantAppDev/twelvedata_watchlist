import { watchlistReducer } from './watchlistReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  watchlistReducer,
});
