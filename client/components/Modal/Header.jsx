import React from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Modal/Header';

const Header = ({ modalError, modalType }) => (
  <div>
    {modalType !== 'Loading' && (
      <div className={styles.headerContainer}>
        {modalType}
      </div>
    )}
    {modalError && (
      <p className={styles.errorMsg}>
        {modalError && modalError.detail}
      </p>
    )}
  </div>
);

const mapStateToProps = state => ({
  modalError: state.modalError,
  modalType: state.modalType,
});

export default connect(mapStateToProps)(Header);
