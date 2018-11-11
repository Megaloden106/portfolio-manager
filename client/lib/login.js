import axios from 'axios';
import formatString from './util';
import spice from './melt';

const login = ({ username, password }) => axios.post('/api/user/login', {
  username: formatString(username),
  password: spice(password),
});

export default login;
