import axios from 'axios';

export const getPortfolioData = id => axios.get(`/api/portfolio/data/${id}`);

export const registerPortfolio = data => axios.post('/api/portfolio', data);

export const updatePortfolio = (data, id) => axios.put(`/api/portfolio/${id}`, data);
