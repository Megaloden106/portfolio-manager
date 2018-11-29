import React from 'react';
import PropTypes from 'prop-types';
import About from './About';
import UserForm from '../containers/UserForm';
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

export default Home;

Home.propTypes = {
  user: PropTypes.string.isRequired,
  handleLogoutClick: PropTypes.func.isRequired,
};
