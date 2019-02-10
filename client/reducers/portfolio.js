import { CHANGE_CURRENT_PORTFOLIO, CHANGE_PORTFOLIO_LIST } from '../actions/actionTypes';

export const currentPortfolioReducer = (state = [], action) => {
  if (action.type === CHANGE_CURRENT_PORTFOLIO) {
    return action.data;
  }
  return state;
};

export const portfolioListReducer = (state = [], action) => {
  if (action.type === CHANGE_PORTFOLIO_LIST) {
    return action.list;
  }
  return state;
};
