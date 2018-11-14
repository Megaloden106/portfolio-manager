import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateModalDisplay from '../../actions/modal';
import UserForm from '../UserForm';
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

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  modalType: PropTypes.string.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
};
