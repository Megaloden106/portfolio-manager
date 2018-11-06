import toggleModal from './modal';

const handleLoginModal = () => (dispatch) => {
  dispatch(toggleModal('Login'));
};

const handleSignupModal = () => (dispatch) => {
  dispatch(toggleModal('Signup'));
};

export { handleLoginModal, handleSignupModal };
