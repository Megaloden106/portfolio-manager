import React from 'react';
import Nav from './Nav';
import Login from './Login';
import About from './About';
import styles from '../styles/Signin';

const Signin = () => (
  <div>
    <Nav />
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

export default Signin;