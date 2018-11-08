const modalErrorReducer = (state = null, action) => {
  if (action.type === 'CHANGE_MODAL_ERROR') {
    return action.modalError;
  }
  return state;
};

export default modalErrorReducer;
