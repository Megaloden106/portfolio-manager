import React from 'react';
import styles from '../styles/LoginRegister';

const LoginRegister = () => (
  <div className={styles.container}>
    {'Don\'t have an account?'}
    <em> Register Now!</em>
    <br />
    <button
      type="button"
      className={styles.button}
    >
      Register
    </button>
  </div>
);

export default LoginRegister;
