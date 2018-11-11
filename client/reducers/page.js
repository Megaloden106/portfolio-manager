const currentPageReducer = (state = 'Home', action) => {
  if (action.type === 'CHANGE_CURRENT_PAGE') {
    return action.page;
  }
  return state;
};

export default currentPageReducer;
