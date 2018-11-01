import axios from 'axios';

const updatePortfolioData = portfolioId => axios.get(`/api/portfolio/${portfolioId}`)
  .catch(error => console.error(error));

export default updatePortfolioData;
