import { changeModal, changeModalError } from './actionCreators';

const updateModalDisplay = (error, type) => (dispatch) => {
  dispatch(changeModalError(error));
  dispatch(changeModal(type));
};

export default updateModalDisplay;
