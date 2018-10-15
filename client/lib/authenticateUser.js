import axios from 'axios';

const authenticateUser = username => axios.get(`/api/user/${username}/`)
  .catch(error => console.error(error));

export default authenticateUser;
