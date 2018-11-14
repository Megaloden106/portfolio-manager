import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../containers/Modal/FormContainer';
import Header from '../../containers/Modal/HeaderContainer';
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
