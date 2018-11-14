const loginModalReducer = (state = '', action) => {
  if (action.type === 'CHANGE_MODAL') {
    return action.modalType;
  }
  return state;
};

const modalErrorReducer = (state = '', action) => {
  if (action.type === 'CHANGE_MODAL_ERROR') {
    return action.modalError;
  }
  return state;
};


export { loginModalReducer, modalErrorReducer };
