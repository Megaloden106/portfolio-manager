import { combineReducers } from 'redux';
import modalError from './error';
import modalType from './modal';
import user from './user';

const rootReducer = combineReducers({
  modalError,
  modalType,
  user,
});

export default rootReducer;
