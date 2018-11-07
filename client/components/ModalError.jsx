import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/ModalError';

const ModalError = ({ modalError }) => (
  <p className={styles.errorMsg}>
    {modalError && modalError.detail.split('=')[1].replace(/\(|\)/g, '')}
  </p>
);

const mapStateToProps = state => ({
  modalError: state.modalError,
});

export default connect(
  mapStateToProps,
)(ModalError);
