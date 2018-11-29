import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/Modal/Header';

const Header = ({ modalError, modalType }) => (
  <React.Fragment>
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
  </React.Fragment>
);

const mapStateToProps = state => ({
  modalError: state.modalError,
  modalType: state.modalType,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  modalError: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
};
