const currentPortfolioReducer = (state = null, action) => {
  if (action.type === 'CHANGE_CURRENT_PORTFOLIO') {
    return action.portfolio;
  }
  return state;
};

export default currentPortfolioReducer;
