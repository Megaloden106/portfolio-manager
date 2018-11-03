import toggleLoginModal from './modal';

const handleLoginModal = boolean => (dispatch) => {
  const handleCloseModal = () => {
    document.removeEventListener('click', handleCloseModal);
    dispatch(toggleLoginModal(false));
  };
  if (!boolean) { document.addEventListener('click', handleCloseModal); }
  dispatch(toggleLoginModal(true));
};

export default handleLoginModal;
