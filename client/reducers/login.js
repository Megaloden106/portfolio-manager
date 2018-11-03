const loginModal = (state = true, action) => {
  if (action.type === 'TOGGLE_LOGIN_MODAL') {
    return action.loginModal;
  }
  return state;
};

export default loginModal;
