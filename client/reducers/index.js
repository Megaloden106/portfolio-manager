import { combineReducers } from 'redux';
import { loginModalReducer, modalErrorReducer } from './modal';
import { addCardReducer, currentPortfolioReducer, portfolioListReducer } from './portfolio';
import user from './user';

const rootReducer = combineReducers({
  addCard: addCardReducer,
  currentPortfolio: currentPortfolioReducer,
  modalError: modalErrorReducer,
  modalType: loginModalReducer,
  portfolioList: portfolioListReducer,
  user,
});

export default rootReducer;
