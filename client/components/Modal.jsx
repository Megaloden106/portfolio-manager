import React from 'react';
import { connect } from 'react-redux';
import ModalBanner from './ModalBanner';
import ModalError from './ModalError';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LoginRegister from './LoginRegister';
import Loading from './Loading';
import styles from '../styles/Modal';

const Modal = ({ modalType, modalError }) => (
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
  modalType: state.modalType,
  modalError: state.modalError,
});

export default connect(
  mapStateToProps,
)(Modal);
