import { combineReducers } from 'redux';
import { loginModalReducer, modalErrorReducer } from './modal';
import { currentPortfolioReducer, portfolioListReducer } from './portfolio';
import addCard from './card';
import user from './user';

const rootReducer = combineReducers({
  addCard,
  currentPortfolio: currentPortfolioReducer,
  modalError: modalErrorReducer,
  modalType: loginModalReducer,
  portfolioList: portfolioListReducer,
  user,
});

export default rootReducer;
