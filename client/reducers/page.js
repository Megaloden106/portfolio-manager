const pageReducer = (state = null, action) => {
  if (action.type === 'CHANGE_PAGE') {
    return action.page;
  }
  return state;
};

export default pageReducer;
