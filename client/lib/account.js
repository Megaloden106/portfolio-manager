import axios from 'axios';
import formatString from './util';
import spice from './melt';

const login = ({ username, password }) => axios.post('/api/user/login', {
  username: formatString(username),
  password: spice(password),
});

const logout = () => axios.get('/api/user/logout');

const register = creds => axios.post('/api/user/register', {
  name: `${formatString(creds.firstName)} ${formatString(creds.lastName)}`,
  email: creds.email,
  username: formatString(creds.username),
  password: spice(creds.password),
});

const session = () => axios.get('/api/user/session');

export {
  login,
  logout,
  register,
  session,
};
