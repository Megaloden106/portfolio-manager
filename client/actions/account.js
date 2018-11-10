import register from '../lib/register';
import authenticate from '../lib/authenticate';
import changeModal from './modal';
import changeModalError from './error';
import changeUser from './user';
import { changePortfolioList } from './portfolio';

const handleAuthentication = creds => (dispatch) => {
  dispatch(changeModal('Loading'));
  return authenticate(creds)
    .then(({ data }) => {
      dispatch(changeUser(data.username));
      dispatch(changePortfolioList(data.portfolios));
      dispatch(changeModal(null));
      dispatch(changeModalError(null));
    }).catch(({ response }) => {
      const detail = response.data.err.message;
      dispatch(changeModalError({ detail }));
      dispatch(changeModal('Login'));
    });
};

const handleRegister = creds => (dispatch) => {
  dispatch(changeModal('Loading'));
  return register(creds)
    .then(() => {
      dispatch(changeModal(null));
      dispatch(changeModalError(null));
      dispatch(handleAuthentication(creds));
    }).catch(({ response }) => {
      const detail = response.data.detail
        .split('=')[1]
        .replace(/\(|\)/g, '');
      dispatch(changeModalError({ detail }));
      dispatch(changeModal('Signup'));
    });
};

export { handleRegister, handleAuthentication };
