import axios from 'axios';
import { genRandomString, sha512 } from './hash';

const formatString = (string) => {
  let result = string.toLowerCase();
  result = result[0].toUpperCase() + string.slice(1);
  return result;
};

const register = (creds) => {
  const salt = genRandomString(25);
  const password = sha512(creds.password, salt);
  return axios.post('/api/user', {
    name: `${formatString(creds.firstName)} ${formatString(creds.lastName)}`,
    email: creds.email,
    username: formatString(creds.username),
    password,
    salt,
  });
};

export default register;
