import React from 'react';
import styles from '../styles/Nav';

const Nav = ({ user }) => (
  <nav className={styles.navContainer}>
    <ul className={styles.list}>
      <li className={styles.item}>Home</li>
    </ul>
    {!user && (
      <div className={styles.account}>
        <b>Login</b> or <b>Signup</b>
      </div>
    )}
  </nav>
);

export default Nav;
