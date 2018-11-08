import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import ModalBanner from './ModalBanner';
import ModalError from './ModalError';
import SignupForm from './SignupForm';
import styles from '../styles/Modal';

const Modal = ({ modalError, modalType }) => (
  <div
    className={styles.container}
    id="modal"
  >
    {modalType !== 'Loading' && <ModalBanner />}
    {modalError && <ModalError modalError={modalError} />}
    {modalType === 'Login' && (
      <div>
        <LoginForm />
        <LoginRegister />
      </div>
    )}
    {modalType === 'Signup' && <SignupForm />}
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
