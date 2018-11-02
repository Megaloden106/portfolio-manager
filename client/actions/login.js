import toggleLoginModal from './modal';

const handleLoginModal = (username, password) => dispatch => {
  const handleCloseModal = () => {
    document.removeEventListener('click', handleCloseModal);
    dispatch(toggleLoginModal(false));
  };
  dispatch(toggleLoginModal(true));
  document.addEventListener('click', handleCloseModal);
}

export default handleLoginModal;
