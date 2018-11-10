const modalErrorReducer = (state = '', action) => {
  if (action.type === 'CHANGE_MODAL_ERROR') {
    return action.modalError;
  }
  return state;
};

export default modalErrorReducer;
