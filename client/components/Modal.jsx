import React from 'react';
import ModalBanner from './ModalBanner';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import styles from '../styles/Modal';

const Modal = () => (
  <div
    className={styles.container}
    id="modal"
  >
    <ModalBanner />
    <LoginForm />
    <LoginRegister />
  </div>
);

export default Modal;
