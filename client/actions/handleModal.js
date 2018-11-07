import toggleModal from './modal';

const handleLoginModal = () => (dispatch) => {
  dispatch(toggleModal('Login'));
};

const handleSignupModal = () => (dispatch) => {
  dispatch(toggleModal('Signup'));
};

const handleLoadingModal = () => (dispatch) => {
  dispatch(toggleModal('Loading'));
};

const handleCloseModal = () => (dispatch) => {
  dispatch(toggleModal(null));
};

export {
  handleLoginModal,
  handleSignupModal,
  handleLoadingModal,
  handleCloseModal,
};
