import React from 'react';
import styles from './Tab.css';

const Nav = ({ portfolio }) => (
  <div>
    {Array.isArray(portfolio)
      ? (
        <div className={styles.portfilio}>
          <p>Portfolio</p>
        </div>
      )
      : (
        <div className={styles.addPortfolio}>
          <p>Add</p>
        </div>
      )
    }

  </div>
);

export default Nav;
