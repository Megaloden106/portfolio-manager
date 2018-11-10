import axios from 'axios';
import formatString from './util';
import pHash from './hash';

const authenticate = ({ username, password }) => axios.post('/api/login', {
  username: formatString(username),
  password: pHash(password),
});

export default authenticate;
