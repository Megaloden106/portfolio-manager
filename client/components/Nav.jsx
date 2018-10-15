import React from 'react';
import Tab from './Tab';
import styles from '../styles/Nav.css';

const Nav = ({ portfolios, currentPortfolio, handleTabClick }) => (
  <div className={styles.container}>
    {portfolios.map((portfolio, idx) => (
      <Tab
        portfolio={portfolio}
        currentPortfolio={currentPortfolio}
        handleTabClick={handleTabClick}
        idx={idx}
        key={portfolio.portfolioId}
      />
    ))}
  </div>
);

export default Nav;
