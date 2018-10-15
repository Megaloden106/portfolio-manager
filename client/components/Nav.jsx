import React from 'react';
import Tab from './Tab';
import styles from '../styles/Nav.css';

const Nav = ({ portfolios }) => (
  <div className={styles.container}>
    {portfolios.map(portfolio => (
      <Tab
        portfolio={portfolio}
        key={portfolio.portfolio_ids}
      />
    ))}
    <Tab
      portfolio={{ exchange: '+', portfolio_ids: null }}
    />
  </div>
);

export default Nav;
