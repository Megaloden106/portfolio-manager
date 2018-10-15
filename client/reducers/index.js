import { combineReducers } from 'redux';
import portfolios from './portfolios';
import user from './user';
import data from './portfolioData';
import page from './page';

const rootReducer = combineReducers({
  data,
  portfolios,
  user,
  page,
});

export default rootReducer;
