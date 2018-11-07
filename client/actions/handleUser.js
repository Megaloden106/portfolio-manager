import register from '../lib/register';
import authenticate from '../lib/authenticate';
import {
  handleLoginModal,
  handleSignupModal,
  handleLoadingModal,
  handleCloseModal,
} from './handleModal';
import changeModalError from './error';

const handleAuthentication = user => dispatch => authenticate(user);

const handleRegister = user => (dispatch) => {
  dispatch(handleLoadingModal());
  return register(user)
    .then(() => {
      dispatch(handleCloseModal());
      dispatch(changeModalError(null));
      dispatch(handleAuthentication(user));
    }).catch(({ response }) => {
      dispatch(changeModalError(response.data));
      dispatch(handleSignupModal());
    });
};

export { handleRegister, handleAuthentication };
