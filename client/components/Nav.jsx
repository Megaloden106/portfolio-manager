import React from 'react';
import { connect } from 'react-redux';
import handleLoginModal from '../actions/login';
import styles from '../styles/Nav';

const Nav = ({ user, loginModal, handleLoginClick }) => (
  <nav className={styles.navContainer}>
    <ul className={styles.list}>
      <li className={styles.item}>Home</li>
    </ul>
    {!user && (
      <div className={styles.account}>
        <button
          type="button"
          onClick={() => handleLoginClick(loginModal)}
          id="loginSubmit"
        >
          <b>Login</b>
        </button>
        or
        <button type="button"><b>Signup</b></button>
      </div>
    )}
  </nav>
);

const mapStateToProps = state => ({
  loginModal: state.loginModal,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: boolean => dispatch(handleLoginModal(boolean)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
