import React from 'react';
import styles from '../styles/ModalError';

const ModalError = ({ modalError }) => (
  <p className={styles.errorMsg}>
    {modalError && modalError.detail.split('=')[1].replace(/\(|\)/g, '')}
  </p>
);

export default ModalError;
