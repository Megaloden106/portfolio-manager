import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import ModalRegister from './ModalRegister';
import ModalBanner from './ModalBanner';
import ModalError from './ModalError';
import UserForm from './UserForm';
import styles from '../styles/Modal';
import loginFormStyles from '../styles/LoginFormModal';
import signupFormstyles from '../styles/SignupForm';

const Modal = ({ modalError, modalType }) => (
  <div
    className={styles.container}
    id="modal"
  >
    {modalType !== 'Loading' && <ModalBanner />}
    {modalError && <ModalError modalError={modalError} />}
    {modalType === 'Login' && (
      <div>
        <UserForm
          styles={loginFormStyles}
          formType="login"
        />
        <ModalRegister />
      </div>
    )}
    {modalType === 'Signup' && (
      <UserForm
        styles={signupFormstyles}
        formType="signup"
      />
    )}
    {modalType === 'Loading' && <Loading />}
  </div>
);

const mapStateToProps = state => ({
  modalError: state.modalError,
  modalType: state.modalType,
});

export default connect(
  mapStateToProps,
)(Modal);
