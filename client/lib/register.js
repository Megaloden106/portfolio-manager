import axios from 'axios';
import formatString from './util';
import spice from './melt';

const register = creds => axios.post('/api/user/register', {
  name: `${formatString(creds.firstName)} ${formatString(creds.lastName)}`,
  email: creds.email,
  username: formatString(creds.username),
  password: spice(creds.password),
});

export default register;
