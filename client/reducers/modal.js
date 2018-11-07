const loginModalReducer = (state = null, action) => {
  if (action.type === 'TOGGLE_MODAL') {
    return action.modalType;
  }
  return state;
};

export default loginModalReducer;
