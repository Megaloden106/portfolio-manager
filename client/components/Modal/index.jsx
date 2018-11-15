import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../containers/Modal/Form';
import Header from '../../containers/Modal/Header';
import Loading from './Loading';
import styles from '../../styles/Modal';

const Modal = ({ modalType }) => (
  <div className={styles.container}>
    <Header />
    {modalType === 'Loading' ? (
      <Loading />
    ) : (
      <Form />
    )}
  </div>
);

export default Modal;

Modal.propTypes = {
  modalType: PropTypes.string.isRequired,
};
