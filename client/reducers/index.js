import { combineReducers } from 'redux';
import { loginModalReducer, modalErrorReducer } from './modal';
import page from './page';
import { currentPortfolioReducer, portfolioListReducer } from './portfolio';
import user from './user';

const rootReducer = combineReducers({
  currentPortfolio: currentPortfolioReducer,
  modalError: modalErrorReducer,
  modalType: loginModalReducer,
  page,
  porfolioData: portfolioListReducer,
  user,
});

export default rootReducer;
