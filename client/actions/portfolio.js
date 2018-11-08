const changePortfolioList = list => ({
  type: 'CHANGE_PORTFOLIO_LIST',
  list,
});

const changeCurrentPortfolio = data => ({
  type: 'CHANGE_CURRENT_PORTFOLIO',
  data,
});

export { changeCurrentPortfolio, changePortfolioList };
