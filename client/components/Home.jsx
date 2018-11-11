import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleLogout } from '../actions/account';
import About from './About';
import BlurLayer from './BlurLayer';
import Modal from './Modal';
import UserForm from './UserForm';
import styles from '../styles/Home';
import formStyles from '../styles/LoginFormPage';


const Home = ({ modalType, user, handleLogoutClick }) => (
  <div>
    {modalType && (
      <div>
        <BlurLayer />
        <Modal />
      </div>
    )}
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
          className={formStyles.submit}
          type="button"
          value="Log out"
          onClick={handleLogoutClick}
        />
      )}
      <About />
    </div>
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLogoutClick: () => dispatch(handleLogout);
})

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  modalType: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  handleLogoutClick: PropTypes.func.isRequired,
};
