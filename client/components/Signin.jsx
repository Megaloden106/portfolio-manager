import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Login from './Login';
import About from './About';
import LoginModal from './LoginModal';
import styles from '../styles/Signin';

const Signin = ({ loginModal }) => (
  <div>
    <Nav />
    {loginModal && <LoginModal />}
    <div className={styles.imageContainer}>
      <img
        src='https://s3-us-west-1.amazonaws.com/portfolio-manager-project/login.jpg'
        alt=''
        className={styles.image}
      />
    </div>
    <div className={styles.loginContainer}>
      <Login />
      <About />
    </div>
  </div>
);

const mapStateToProps = state => ({
  loginModal: state.loginModal,
});

export default connect(
  mapStateToProps,
)(Signin);