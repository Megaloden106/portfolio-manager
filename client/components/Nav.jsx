import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import updateModalDisplay from '../actions/modal';
import styles from '../styles/Nav';

const Nav = ({ user, handleLoginClick, handleSingupClick }) => (
  <div className={styles.navContainer}>
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        {user && (
          <li className={styles.item}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        )}
      </ul>
      {!user ? (
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
      ) : (
        <div className={styles.account}>{user}</div>
      )}
    </nav>
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));

Nav.propTypes = {
  user: PropTypes.string.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
};
