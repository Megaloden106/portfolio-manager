const changeCurrentPortfolio = data => ({
  type: 'CHANGE_CURRENT_PORTFOLIO',
  data,
});

const changePortfolioList = list => ({
  type: 'CHANGE_PORTFOLIO_LIST',
  list,
});

export { changeCurrentPortfolio, changePortfolioList };
