const loginModalReducer = (state = '', action) => {
  if (action.type === 'CHANGE_MODAL') {
    return action.modalType;
  }
  return state;
};

export default loginModalReducer;
