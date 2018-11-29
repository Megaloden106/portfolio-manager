import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleLogout } from '../actions/auth';
import UserForm from './UserForm';
import styles from '../styles/Home';

const Home = ({ user, handleLogoutClick }) => (
  <React.Fragment>
    <div className={styles.imageContainer}>
      <img
        src="https://s3-us-west-1.amazonaws.com/portfolio-manager-project/login.jpg"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.loginContainer}>
      {!user ? (
        <UserForm
          styles={styles}
          formType="Login"
        />
      ) : (
        <input
          className={styles.logout}
          type="button"
          value="Log out"
          onClick={handleLogoutClick}
        />
      )}
      <div className={styles.aboutContainer}>
        <p>
          &emsp;Have you been stuck managing your 401k, HSA, Roth IRA, and other porfolios?
          Originally I have used spreadsheets to manage
          this process and found it to be a painful upkeep.
          This ongoing project was inspired to simplify this manual task.
        </p>
      </div>
    </div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLogoutClick: () => dispatch(handleLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  user: PropTypes.string,
  handleLogoutClick: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};
