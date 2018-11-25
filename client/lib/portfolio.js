import axios from 'axios';

const getPortfolioData = id => axios.get(`/api/portfolio/${id}`);

const registerPortfolio = data => axios.post('/api/portfolio', data);

const updatePortfolio = (data, id) => axios.put(`/api/portfolio/${id}`, data);

export { getPortfolioData, registerPortfolio, updatePortfolio };
