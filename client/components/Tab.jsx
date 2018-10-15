import React from 'react';
import styles from '../styles/Tab.css';

const Tab = ({ portfolio }) => (
  <div className={styles.container}>
    <p>{portfolio.exchange}</p>
  </div>
);

export default Tab;
