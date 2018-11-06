import toggleLoginModal from './modal';

const handleLoginModal = () => (dispatch) => {
  dispatch(toggleLoginModal(true));
};

export default handleLoginModal;
