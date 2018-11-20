import React from 'react';
import PropTypes from 'prop-types';
import UserForm from '../../containers/UserForm';
import styles from '../../styles/Modal/Form';

const Form = ({ modalType, handleSingupClick, handleLoginClick }) => (
  <div>
    <UserForm
      styles={styles}
      formType={modalType}
    />
    {modalType === 'Login' && (
      <div className={styles.registerContainer}>
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
      <div className={styles.registerContainer}>
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

export default Form;

Form.propTypes = {
  modalType: PropTypes.string.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
};
