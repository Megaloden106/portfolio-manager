import { combineReducers } from 'redux';
import modalError from './error';
import modalType from './modal';
import { currentPortfolioReducer, portfolioListReducer } from './portfolio';
import user from './user';

const rootReducer = combineReducers({
  currentPortfolio: currentPortfolioReducer,
  modalError,
  modalType,
  porfolioData: portfolioListReducer,
  user,
});

export default rootReducer;
