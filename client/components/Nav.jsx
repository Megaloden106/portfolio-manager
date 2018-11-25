import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/Nav';

const Nav = ({
  portfolioList, user, handleLoginClick, handleSingupClick,
}) => (
  <div className={styles.navContainer}>
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <Link to="/">
          <li className={styles.item}>Home</li>
        </Link>
        {user && (
          <Link to={`/portfolio/${portfolioList[0].id}/`}>
            <li className={styles.item}>Portfolio</li>
          </Link>
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
        <div className={styles.username}>{user}</div>
      )}
    </nav>
  </div>
);

export default Nav;

Nav.propTypes = {
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  user: PropTypes.string.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
};
