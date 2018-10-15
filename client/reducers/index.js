import { combineReducers } from 'redux';
import portfolios from './portfolios';
import user from './user';

const rootReducer = combineReducers({
  portfolios,
  user,
});

export default rootReducer;
