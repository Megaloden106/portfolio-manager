import axios from 'axios';

const checkSessions = () => axios.get('/api/user/session');

export default checkSessions;
