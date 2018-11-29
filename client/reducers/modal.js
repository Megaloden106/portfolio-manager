import { CHANGE_MODAL, CHANGE_MODAL_ERROR } from '../actions/actionTypes';

const loginModalReducer = (state = null, action) => {
  if (action.type === CHANGE_MODAL) {
    return action.modalType;
  }
  return state;
};

const modalErrorReducer = (state = null, action) => {
  if (action.type === CHANGE_MODAL_ERROR) {
    return action.modalError;
  }
  return state;
};

export { loginModalReducer, modalErrorReducer };
