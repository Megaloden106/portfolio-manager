import axios from 'axios';
import formatString from './util';
import pHash from './hash';

const register = creds => axios.post('/api/register', {
  name: `${formatString(creds.firstName)} ${formatString(creds.lastName)}`,
  email: creds.email,
  username: formatString(creds.username),
  password: pHash(creds.password),
});

export default register;
