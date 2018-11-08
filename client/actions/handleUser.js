import register from '../lib/register';
import authenticate from '../lib/authenticate';
import {
  handleLoginModal,
  handleSignupModal,
  handleLoadingModal,
  handleCloseModal,
} from './handleModal';
import changeModalError from './error';

const handleAuthentication = creds => (dispatch) => {
  dispatch(handleLoadingModal());
  return authenticate(creds)
    .then(response => console.log(response));
};

const handleRegister = creds => (dispatch) => {
  dispatch(handleLoadingModal());
  return register(creds)
    .then(() => {
      dispatch(handleCloseModal());
      dispatch(changeModalError(null));
      dispatch(handleAuthentication(creds));
    }).catch(({ response }) => {
      dispatch(changeModalError(response.data));
      dispatch(handleSignupModal());
    });
};

export { handleRegister, handleAuthentication };
