import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateModalDisplay from '../../actions/modal';
import UserForm from '../../containers/UserForm';
import styles from '../../styles/Modal/Form';

const Form = ({ modalType, handleSingupClick, handleLoginClick }) => (
  <React.Fragment>
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
  </React.Fragment>
);

Form.propTypes = {
  modalType: PropTypes.string.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
