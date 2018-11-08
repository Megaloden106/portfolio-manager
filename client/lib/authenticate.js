import axios from 'axios';
import { formatString, sha512 } from './hash';

const authenticate = ({ username, password }) => axios.get(`/api/user/${formatString(username)}`)
  .then(({ data }) => data[0])
  .then(creds => (creds.password === sha512(password, creds.salt) ? creds : null));

export default authenticate;
