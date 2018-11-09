import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Header from './Header';
import Loading from './Loading';
import styles from '../../styles/Modal';

const Modal = ({ modalType }) => (
  <div className={styles.container}>
    <Header />
    {(modalType === 'Login' || modalType === 'Signup') && (
      <Form />
    )}
    {modalType === 'Loading' && <Loading />}
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});


export default connect(mapStateToProps)(Modal);
