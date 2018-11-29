import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import updateModalDisplay from '../actions/modal';
import UserForm from './UserForm';
import styles from '../styles/Modal';

const Modal = ({
  modalError,
  modalType,
  handleSingupClick,
  handleLoginClick,
}) => (
  <div className={styles.container}>
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
    {modalType === 'Loading' ? (
      <div className={styles.loadContainer}>
        <ReactLoading
          type="spokes"
          color="black"
          height="10%"
          width="10%"
          className={styles.spoke}
        />
      </div>
    ) : (
      <UserForm
        styles={styles}
        formType={modalType}
      />
    )}
    {modalType === 'Login' && (
      <div className={styles.formContainer}>
        {'Don\'t have an account?'}
        <button
          type="button"
          className={styles.button}
          onClick={handleSingupClick}
        >
          <em> Register Now!</em>
        </button>
      </div>
    )}
    {modalType === 'Signup' && (
      <div className={styles.formContainer}>
        {'Already have an account?'}
        <button
          type="button"
          className={styles.button}
          onClick={handleLoginClick}
        >
          <em> Sign In Now!</em>
        </button>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  modalError: state.modalError,
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
  modalError: PropTypes.string,
  modalType: PropTypes.string,
  handleSingupClick: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalError: null,
  modalType: null,
};
