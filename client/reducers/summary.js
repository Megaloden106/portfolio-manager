const portfolioSummaryReducer = (state = [], action) => {
  if (action.type === 'CHANGE_PORTFOLIO_SUMMARY') {
    return action.portfolioSummary;
  }
  return state;
};

export default portfolioSummaryReducer;
