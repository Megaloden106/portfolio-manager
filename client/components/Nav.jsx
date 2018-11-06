import React from 'react';
import { connect } from 'react-redux';
import handleLoginModal from '../actions/handleModal';
import styles from '../styles/Nav';

const Nav = ({ user, modalType, handleLoginClick }) => (
  <div className={styles.navContainer}>
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
      </ul>
      {!user && (
        <div className={styles.account}>
          <button
            type="button"
            onClick={() => handleLoginClick(modalType)}
            id="loginSubmit"
          >
            <b>Login</b>
          </button>
          or
          <button type="button"><b>Signup</b></button>
        </div>
      )}
    </nav>
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: modalType => dispatch(handleLoginModal(modalType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
