import React from 'react';
import PropTypes from 'prop-types';
import UserForm from '../../containers/UserFormContainer';
import styles from '../../styles/Modal/Form';
import loginFormStyles from '../../styles/LoginFormModal';
import signupFormstyles from '../../styles/SignupForm';

const Form = ({ modalType, handleSingupClick }) => (
  <div>
    <UserForm
      styles={modalType === 'Login' ? loginFormStyles : signupFormstyles}
      formType={modalType}
    />
    {modalType === 'Login' && (
      <div className={styles.registerContainer}>
        {'Don\'t have an account?'}
        <em> Register Now!</em>
        <br />
        <button
          type="button"
          className={styles.button}
          onClick={handleSingupClick}
        >
          Register
        </button>
      </div>
    )}
  </div>
);

export default Form;

Form.propTypes = {
  modalType: PropTypes.string.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
};
