import { combineReducers } from 'redux';
import { loginModalReducer, modalErrorReducer } from './modal';
import { currentPortfolioReducer, portfolioListReducer } from './portfolio';
import user from './user';

const rootReducer = combineReducers({
  currentPortfolio: currentPortfolioReducer,
  modalError: modalErrorReducer,
  modalType: loginModalReducer,
  porfolioData: portfolioListReducer,
  user,
});

export default rootReducer;
