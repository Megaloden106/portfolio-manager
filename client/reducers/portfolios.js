const portfolioReducer = (state = [{
  exchange: '+',
  portfolioId: null,
}], action) => {
  if (action.type === 'CHANGE_PORTFOLIOS') {
    console.log(action)
    return action.portfolios;
  }
  return state;
};

export default portfolioReducer;
