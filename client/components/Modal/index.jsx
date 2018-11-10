import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import Header from './Header';
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

const mapStateToProps = state => ({
  modalType: state.modalType,
});


export default connect(mapStateToProps)(Modal);

Modal.propTypes = {
  modalType: PropTypes.string.isRequired,
};
