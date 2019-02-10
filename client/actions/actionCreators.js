import * as types from './actionTypes';

// User action creators
export const changeUser = user => ({
  type: types.CHANGE_USER,
  user,
});


// Porfolio action creators
export const changeCurrentPortfolio = data => ({
  type: types.CHANGE_CURRENT_PORTFOLIO,
  data,
});

export const changePortfolioList = list => ({
  type: types.CHANGE_PORTFOLIO_LIST,
  list,
});


// Modal action creators
export const changeModal = string => ({
  type: types.CHANGE_MODAL,
  modalType: string,
});

export const changeModalError = error => ({
  type: types.CHANGE_MODAL_ERROR,
  modalError: error,
});
