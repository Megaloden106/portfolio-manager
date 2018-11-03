import React from 'react';
import Banner from './Banner';
import LoginForm from './LoginForm';
import styles from '../styles/LoginModal';

const LoginModal = () => (
  <div className={styles.container}>
    <Banner />
    <LoginForm />
    {/* <OAuth /> */}
    {/* <Register /> */}
  </div>
);

export default LoginModal;
