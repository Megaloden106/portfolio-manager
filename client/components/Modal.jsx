import React from 'react';
import { connect } from 'react-redux';
import ModalBanner from './ModalBanner';
import ModalError from './ModalError';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LoginRegister from './LoginRegister';
import styles from '../styles/Modal';

const Modal = ({ modalType }) => (
  <div
    className={styles.container}
    id="modal"
  >
    <ModalBanner />
    <ModalError />
    {modalType === 'Login' && (
      <div>
        <LoginForm />
        <LoginRegister />
      </div>
    )}
    {modalType === 'Signup' && <SignupForm />}
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

export default connect(
  mapStateToProps,
)(Modal);
