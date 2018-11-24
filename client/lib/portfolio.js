import axios from 'axios';

const getPortfolioData = id => axios.get(`/api/portfolio/${id}`);

const registerPortfolio = data => axios.post('/api/portfolio', data);

export { getPortfolioData, registerPortfolio };
