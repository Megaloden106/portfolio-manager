import React from 'react';
import { connect } from 'react-redux';
import handleLoginModal from '../actions/login';
import styles from '../styles/Nav';

const Nav = ({ user, handleLoginModal }) => (
  <nav className={styles.navContainer}>
    <ul className={styles.list}>
      <li className={styles.item}>Home</li>
    </ul>
    {!user && (
      <div className={styles.account}>
        <button onClick={handleLoginModal}><b>Login</b></button> or
        <button><b>Signup</b></button>
      </div>
    )}
  </nav>
);

const mapDispatchToProps = dispatch => ({
  handleLoginModal: () => dispatch(handleLoginModal()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Nav);
