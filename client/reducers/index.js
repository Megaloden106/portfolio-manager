import { combineReducers } from 'redux';
import portfolios from './portfolios';
import user from './user';
import data from './portfolioData';
import page from './page';
import currentPortfolio from './currentPortfolio';

const rootReducer = combineReducers({
  data,
  page,
  currentPortfolio,
  portfolios,
  user,
});

export default rootReducer;
