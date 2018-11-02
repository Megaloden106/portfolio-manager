const loginModal = (state = false, action) => {
  if (action.type === 'TOGGLE_LOGIN_MODAL') {
    return action.loginModal;
  }
  return state;
};

export default loginModal;
