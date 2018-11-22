import axios from 'axios';

const getExchanges = () => axios.get('/api/exchanges');

export default getExchanges;
