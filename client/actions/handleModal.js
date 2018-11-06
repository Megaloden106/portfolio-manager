import toggleModal from './modal';

const handleLoginModal = () => (dispatch) => {
  dispatch(toggleModal('login'));
};

export default handleLoginModal;
