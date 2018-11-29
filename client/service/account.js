import axios from 'axios';
import crypto from 'crypto';

const formatString = (string) => {
  if (string.length === 0) { return ''; }
  let result = string.toLowerCase();
  result = result[0].toUpperCase() + string.slice(1);
  return result;
};

const start = process.env.PEPPER_S;
const end = process.env.PEPPER_E;

const pepper = (password) => {
  const hash = crypto.createHmac('sha512', start);
  hash.update(password + end);
  return hash.digest('hex');
};

export const login = ({ username, password }) => axios.post('/api/user/login', {
  username: formatString(username),
  password: pepper(password),
});

export const logout = () => axios.get('/api/user/logout');

export const register = creds => axios.post('/api/user/register', {
  name: `${formatString(creds.firstName)} ${formatString(creds.lastName)}`,
  email: creds.email,
  username: formatString(creds.username),
  password: pepper(creds.password),
});

export const session = () => axios.get('/api/user/session');
