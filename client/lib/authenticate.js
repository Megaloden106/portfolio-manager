import axios from 'axios';
import { formatString, sha512 } from './hash';

const authenticate = ({ username, password }) => axios.get(`/api/user/${formatString(username)}`)
  .catch(() => { throw new Error('=Invalid username'); })
  .then(({ data }) => data)
  .then((creds) => {
    if (creds.password !== sha512(password, creds.salt)) { throw new Error('=Invalid password'); }
    return creds;
  });

export default authenticate;
