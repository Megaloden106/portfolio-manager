import React from 'react';
import { connect } from 'react-redux';
import { handleSignupModal } from '../actions/handleModal';
import styles from '../styles/LoginRegister';

const LoginRegister = ({ handleSingupClick }) => (
  <div className={styles.container}>
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
);

const mapDispatchToProps = dispatch => ({
  handleSingupClick: () => dispatch(handleSignupModal()),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginRegister);
