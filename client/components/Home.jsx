import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleLogout } from '../actions/auth';
import About from './About';
import UserForm from './UserForm';
import styles from '../styles/Home';
import formStyles from '../styles/Form';

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
          styles={formStyles}
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
      <About />
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
  user: PropTypes.string.isRequired,
  handleLogoutClick: PropTypes.func.isRequired,
};
