import axios from 'axios';

// portfolio management
export const getPortfolioData = id => axios.get(`/api/portfolio/data/${id}`);
export const registerPortfolio = data => axios.post('/api/portfolio', data);
export const updatePortfolio = (data, id) => axios.put(`/api/portfolio/${id}`, data);

// portfolio exchanges
export const getExchanges = () => axios.get('/api/exchanges');
