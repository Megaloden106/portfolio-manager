const portfolioReducer = (state = [], action) => {
  if (action.type === 'CHANGE_PORTFOLIOS') {
    return action.portfolios;
  }
  return state;
};

export default portfolioReducer;
