import { combineReducers } from 'redux';
import portfolios from './portfolios';
import user from './user';
import summary from './summary';

const rootReducer = combineReducers({
  summary,
  portfolios,
  user,
});

export default rootReducer;
