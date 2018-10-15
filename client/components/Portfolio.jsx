import React from 'react';
import Graph from './Graph';
import PortfolioData from './PortfolioData';
import Analytics from './Analytics';
import styles from './Portfolio.css';

const Portfolio = () => (
  <div className={styles.container}>
    <Graph />
    <PortfolioData />
    <Analytics />
  </div>
);

export default Portfolio;
