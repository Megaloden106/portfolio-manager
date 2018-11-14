import React from 'react';
import PropTypes from 'prop-types';
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
        {modalError}
      </p>
    )}
  </div>
);

export default Header;

Header.propTypes = {
  modalError: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
};
