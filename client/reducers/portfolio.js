const currentPortfolioReducer = (state = [], action) => {
  if (action.type === 'CHANGE_CURRENT_PORTFOLIO') {
    return action.data;
  }
  return state;
};

const portfolioListReducer = (state = [], action) => {
  console.log(action)
  if (action.type === 'CHANGE_PORTFOLIO_LIST') {
    return action.list;
  }
  return state;
};

export { portfolioListReducer, currentPortfolioReducer };
