import React from 'react';
import { connect } from 'react-redux';
import { handleLoginModal, handleSignupModal } from '../actions/handleModal';
import styles from '../styles/Nav';

const Nav = ({ user, handleLoginClick, handleSingupClick }) => (
  <div className={styles.navContainer}>
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
      </ul>
      {!user && (
        <div className={styles.account}>
          <button
            type="button"
            onClick={handleLoginClick}
            id="loginSubmit"
          >
            <b>Login</b>
          </button>
          or
          <button
            type="button"
            onClick={handleSingupClick}
            id="loginSubmit"
          >
            <b>Signup</b>
          </button>
        </div>
      )}
    </nav>
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: () => dispatch(handleLoginModal()),
  handleSingupClick: () => dispatch(handleSignupModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
