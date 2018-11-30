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
  handleLogin,
  handleSingup,
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
          onClick={handleSingup}
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
          onClick={handleLogin}
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
  handleLogin: () => dispatch(updateModalDisplay('', 'Login')),
  handleSingup: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
  modalError: PropTypes.string,
  modalType: PropTypes.string,
  handleSingup: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalError: null,
  modalType: null,
};
