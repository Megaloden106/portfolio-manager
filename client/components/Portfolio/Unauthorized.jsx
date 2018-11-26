import React from 'react';
import styles from '../../styles/Portfolio/Unauthorized';

const Unauthorized = () => (
  <div className={styles.unauthContainer}>
    <h2 className={styles.header}>
      HTTP ERROR 401
    </h2>
    <p className={styles.text}>
      You do not have permission to access this page.
    </p>
  </div>
);

export default Unauthorized;
