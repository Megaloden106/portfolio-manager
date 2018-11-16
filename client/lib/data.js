import axios from 'axios';

const getPortfolioData = id => axios.get(`/portfolio/${id}`);

export default getPortfolioData;
