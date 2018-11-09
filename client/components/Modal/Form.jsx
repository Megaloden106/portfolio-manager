import React from 'react';
import { connect } from 'react-redux';
import changeModal from '../../actions/modal';
import UserForm from '../UserForm';
import styles from '../../styles/Modal/Login';
import loginFormStyles from '../../styles/LoginFormModal';
import signupFormstyles from '../../styles/SignupForm';

const Login = ({ modalType, handleSingupClick }) => (
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

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleSingupClick: () => dispatch(changeModal('Signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
