import toggleLoginModal from './modal';

const handleBlurLayer = () => (dispatch) => {
  dispatch(toggleLoginModal(false));
};

export default handleBlurLayer;
