import register from '../lib/register';
import authenticate from '../lib/authenticate';
import changeModal from './modal';
import changeModalError from './error';
import changeUser from './user';
import { changePortfolioList } from './portfolio';

const handleAuthentication = creds => (dispatch) => {
  dispatch(changeModal('Loading'));
  return authenticate(creds)
    .then(({ username, portfolios }) => {
      dispatch(changeUser(username));
      dispatch(changePortfolioList(portfolios));
      dispatch(changeModal(null));
      dispatch(changeModalError(null));
    }).catch((error) => {
      dispatch(changeModalError({ detail: error.toString() }));
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
      dispatch(changeModalError(response.data));
      dispatch(changeModal('Signup'));
    });
};

export { handleRegister, handleAuthentication };
