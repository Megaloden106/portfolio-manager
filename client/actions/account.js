import register from '../lib/register';
import authenticate from '../lib/authenticate';
import updateModalDisplay from './modal';
import changeUser from './user';
import { changePortfolioList } from './portfolio';

const handleLogin = creds => (dispatch) => {
  dispatch(updateModalDisplay('', 'Loading'));
  return authenticate(creds)
    .then(({ data }) => {
      dispatch(changeUser(data.username));
      dispatch(changePortfolioList(data.portfolios));
      dispatch(updateModalDisplay('', ''));
    }).catch(({ response }) => {
      const detail = response.data.err.message;
      dispatch(updateModalDisplay({ detail }, 'Login'));
    });
};

const handleRegister = creds => (dispatch) => {
  dispatch(updateModalDisplay('', 'Loading'));
  return register(creds)
    .then(() => {
      dispatch(updateModalDisplay('', ''));
      dispatch(handleLogin(creds));
    }).catch(({ response }) => {
      const detail = response.data.detail
        .split('=')[1]
        .replace(/\(|\)/g, '');
      dispatch(updateModalDisplay({ detail }, 'Signup'));
    });
};

export { handleRegister, handleLogin };
