import axios from 'axios';
import {
  pepperS,
  pepperE,
  genRandomString,
  sha512,
} from './hash';

const register = (creds) => {
  const salt = genRandomString(25);
  const password = sha512(pepperS + creds.password, salt + pepperE);
  return axios.post('/api/user', {
    name: `${creds.firstName} ${creds.lastName}`,
    email: creds.email,
    username: creds.username,
    password,
    salt,
  }).catch(({ response }) => response.data);
};

export default register;
