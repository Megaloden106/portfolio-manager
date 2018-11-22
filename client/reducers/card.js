const addCardReducer = (state = false, action) => {
  if (action.type === 'CHANGE_ADD_CARD') {
    return action.addCard;
  }
  return state;
};

export default addCardReducer;
