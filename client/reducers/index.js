import { combineReducers } from 'redux';
import modalType from './modal';
import modalError from './error';

const rootReducer = combineReducers({
  modalType,
  modalError,
});

export default rootReducer;
