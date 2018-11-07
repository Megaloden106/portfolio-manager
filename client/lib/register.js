import axios from 'axios';
import {
  pepperS,
  pepperE,
  genRandomString,
  sha512,
} from './hash';

const formatString = (string) => {
  let result = string.toLowerCase();
  result = result[0].toUpperCase() + string.slice(1);
  return result;
};

const register = (creds) => {
  const salt = genRandomString(25);
  const password = sha512(pepperS + creds.password, salt + pepperE);
  return axios.post('/api/user', {
    name: `${formatString(creds.firstName)} ${formatString(creds.lastName)}`,
    email: creds.email,
    username: formatString(creds.username),
    password,
    salt,
  }).catch(({ response }) => response.data);
};

export default register;
