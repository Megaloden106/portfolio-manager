const userReducer = (state = '', action) => {
  if (action.type === 'CHANGE_USER') {
    return action.user;
  }
  return state;
};

export default userReducer;
