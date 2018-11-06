import toggleLoginModal from './modal';

const handleLoginModal = boolean => (dispatch) => {
  const handleCloseModal = (event) => {
    if (!document.getElementById('loginModal').contains(event.target)) {
      document.removeEventListener('click', handleCloseModal);
      dispatch(toggleLoginModal(false));
    }
  };
  if (!boolean) { document.addEventListener('click', handleCloseModal); }
  dispatch(toggleLoginModal(true));
};

export default handleLoginModal;
