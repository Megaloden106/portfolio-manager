import { changePortfolioList, changeUser } from './actionCreators';
import updateModalDisplay from './modal';
import * as auth from '../service/account';

const handleData = data => (dispatch) => {
  if (data.username) {
    dispatch(changePortfolioList(data.portfolios));
    dispatch(changeUser(data.username));
  } else {
    dispatch(changeUser(null));
    dispatch(changePortfolioList([]));
  }
  dispatch(updateModalDisplay(null, null));
};

export const handleLogin = (creds, history) => (dispatch) => {
  dispatch(updateModalDisplay(null, 'Loading'));
  return auth.login(creds)
    .then(({ data }) => {
      dispatch(handleData(data));
      history.push(`/portfolio/${data.portfolios[0].id}/`);
    }).catch(({ response }) => {
      const detail = response.data.err.message;
      dispatch(updateModalDisplay(detail, 'Login'));
    });
};

export const handleLogout = () => (dispatch) => {
  dispatch(updateModalDisplay(null, 'Loading'));
  return auth.logout()
    .then(() => dispatch(handleData({})))
    .catch(() => console.error('Logout ERROR'));
};

export const handleRegister = (creds, history) => (dispatch) => {
  dispatch(updateModalDisplay(null, 'Loading'));
  return auth.register(creds)
    .then(() => dispatch(handleLogin(creds, history)))
    .catch(({ response }) => {
      const detail = response.data.detail
        .split('=')[1]
        .replace(/\(|\)/g, '');
      dispatch(updateModalDisplay(detail, 'Signup'));
    });
};

export const handleSessionCheck = history => dispatch => auth.session()
  .then(({ data }) => {
    if (!data.username) {
      dispatch(changeUser(null));
      history.push('/');
    } else {
      dispatch(handleData(data));
    }
  }).catch(error => console.error(error));
