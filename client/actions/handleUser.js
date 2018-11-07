import register from '../lib/register';
import authenticate from '../lib/authenticate';
import { handleLoginModal, handleSignupModal, handleLoadingModal } from './handleModal';
import changeModalError from './error';

const handleRegister = user => (dispatch) => {
  dispatch(handleLoadingModal());
  return register(user)
    .catch(({ response }) => {
      dispatch(changeModalError(response.data));
      dispatch(handleSignupModal());
    });
};

const handleAuthentication = user => dispatch => authenticate(user);

export { handleRegister, handleAuthentication };
