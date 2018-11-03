import React from 'react';
import LoginBanner from './LoginBanner';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import styles from '../styles/LoginModal';

const LoginModal = () => (
  <div className={styles.container}>
    <LoginBanner />
    <LoginForm />
    {/* <OAuth /> */}
    <LoginRegister />
  </div>
);

export default LoginModal;
