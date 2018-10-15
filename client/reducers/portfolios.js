const portfolioReducer = (state = [{
  exchange: '+',
  portfolio_id: null,
}], action) => {
  if (action.type === 'CHANGE_PORTFOLIOS') {
    return action.portfolios;
  }
  return state;
};

export default portfolioReducer;
