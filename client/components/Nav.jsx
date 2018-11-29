import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import updateModalDisplay from '../actions/modal';
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

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

Nav.propTypes = {
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  user: PropTypes.string,
  handleLoginClick: PropTypes.func.isRequired,
  handleSingupClick: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  user: null,
};
