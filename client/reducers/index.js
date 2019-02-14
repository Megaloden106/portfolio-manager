import { combineReducers } from 'redux';
import { modalReducer, modalErrorReducer } from './modal';
import { currentPortfolioReducer, portfolioListReducer } from './portfolio';
import user from './user';

const rootReducer = combineReducers({
  currentPortfolio: currentPortfolioReducer,
  modalError: modalErrorReducer,
  modalType: modalReducer,
  portfolioList: portfolioListReducer,
  user,
});

export default rootReducer;
