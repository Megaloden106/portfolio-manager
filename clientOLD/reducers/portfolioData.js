const portfolioDataReducer = (state = [], action) => {
  if (action.type === 'CHANGE_PORTFOLIO_DATA') {
    return action.portfolioData;
  }
  return state;
};

export default portfolioDataReducer;
