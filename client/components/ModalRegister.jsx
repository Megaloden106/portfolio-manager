import React from 'react';
import { connect } from 'react-redux';
import changeModal from '../actions/modal';
import styles from '../styles/LoginRegister';

const ModalRegister = ({ handleSingupClick }) => (
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
  handleSingupClick: () => dispatch(changeModal('Signup')),
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalRegister);
