import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import updateModalDisplay from '../actions/modal';
import { registerNewPortfolio } from '../actions/portfolio';
import BalanceForm from './Portfolio/Content/BalanceForm';
import PortfolioForm from './Portfolio/Form';
import UserForm from './UserForm';
import styles from '../styles/Modal';
import formStyles from '../styles/Portfolio/Form';

const UserModal = ({
  modalError,
  modalType,
  handleCloseModal,
  handleLogin,
  handleSingup,
  handleSubmit,
}) => (
  <div className={`${styles.container} ${!modalType.includes('Add')
    ? styles.width1
    : styles.width2}`}
  >
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
    {modalType === 'Loading' && (
      <div className={styles.loadContainer}>
        <ReactLoading
          type="spokes"
          color="black"
          height="10%"
          width="10%"
          className={styles.spoke}
        />
      </div>
    )}
    {(modalType === 'Login' || modalType === 'Signup') && (
      <UserForm
        styles={styles}
        formType={modalType}
      />
    )}
    {modalType.includes('Portfolio') && (
      <PortfolioForm
        form="add"
        styles={formStyles}
        handleCancel={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    )}
    {modalType.includes('Balance') && (
      <BalanceForm />
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
  handleCloseModal: () => dispatch(updateModalDisplay(null, null)),
  handleLogin: () => dispatch(updateModalDisplay('', 'Login')),
  handleSingup: () => dispatch(updateModalDisplay('', 'Signup')),
  handleSubmit: (data, history) => dispatch(registerNewPortfolio(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);

UserModal.propTypes = {
  modalError: PropTypes.string,
  modalType: PropTypes.string,
  handleCloseModal: PropTypes.func.isRequired,
  handleSingup: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

UserModal.defaultProps = {
  modalError: null,
  modalType: null,
};
