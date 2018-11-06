import toggleModal from './modal';

const handleBlurLayer = () => (dispatch) => {
  dispatch(toggleModal(null));
};

export default handleBlurLayer;
