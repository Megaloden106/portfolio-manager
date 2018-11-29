import { CHANGE_USER } from '../actions/actionTypes';

const userReducer = (state = null, action) => {
  if (action.type === CHANGE_USER) {
    return action.user;
  }
  return state;
};

export default userReducer;
