import {
  login, logout, register, session,
} from '../lib/account';
import history from '../lib/history';
import updateModalDisplay from './modal';
import changeUser from './user';
import { changePortfolioList } from './portfolio';

const handleData = data => (dispatch) => {
  dispatch(changeUser(data.username || ''));
  dispatch(changePortfolioList(data.portfolios || []));
  dispatch(updateModalDisplay('', ''));
};

const handleLogin = creds => (dispatch) => {
  dispatch(updateModalDisplay('', 'Loading'));
  return login(creds)
    .then(({ data }) => {
      dispatch(handleData(data));
      history.push('/portfolio');
    }).catch(({ response }) => {
      const detail = response.data.err.message;
      dispatch(updateModalDisplay(detail, 'Login'));
    });
};

const handleLogout = () => (dispatch) => {
  dispatch(updateModalDisplay('', 'Loading'));
  return logout()
    .then(() => dispatch(handleData({})))
    .catch(() => console.error('Logout ERROR'));
};

const handleRegister = creds => (dispatch) => {
  dispatch(updateModalDisplay('', 'Loading'));
  return register(creds)
    .then(() => dispatch(handleLogin(creds)))
    .catch(({ response }) => {
      const detail = response.data.detail
        .split('=')[1]
        .replace(/\(|\)/g, '');
      dispatch(updateModalDisplay(detail, 'Signup'));
    });
};

const handleSessionCheck = () => dispatch => session()
  .then(({ data }) => dispatch(handleData(data)))
  .catch(error => console.error(error));

export {
  handleRegister, handleLogin, handleLogout, handleSessionCheck,
};
