import axios from 'axios';

const authenticateUser = (username) => {
  return axios.get(`/api/user/${username}`);
};

export default authenticateUser;
