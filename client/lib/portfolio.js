import axios from 'axios';

const getPortfolios = username => axios.get(`/api/portfolio/${username}`);

export default getPortfolios;
