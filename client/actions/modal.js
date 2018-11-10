const changeModal = string => ({
  type: 'CHANGE_MODAL',
  modalType: string,
});

const changeModalError = error => ({
  type: 'CHANGE_MODAL_ERROR',
  modalError: error,
});

const updateModalDisplay = (error, type) => (dispatch) => {
  dispatch(changeModalError(error));
  dispatch(changeModal(type));
};

export default updateModalDisplay;
