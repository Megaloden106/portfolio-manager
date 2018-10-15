const portfolioReducer = (state = [{
  exchange: '+',
  portfolioId: null,
}], action) => {
  if (action.type === 'CHANGE_PORTFOLIOS') {
    return action.portfolios;
  }
  return state;
};

export default portfolioReducer;
