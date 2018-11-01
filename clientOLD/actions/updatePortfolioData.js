import updatePortfolio from '../lib/updatePortfolioData';
import changePortfolioData from './portfolioData';

const handlePortfolioChange = portfolioId => dispatch => updatePortfolio(portfolioId)
  .then(({ data }) => dispatch(changePortfolioData(data)))
  .catch(error => console.error(error));

export default handlePortfolioChange;
