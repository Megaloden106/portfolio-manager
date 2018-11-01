import React from 'react';
import Graph from './Graph';
import PortfolioData from './PortfolioData';
import Analytics from './Analytics';
import styles from '../styles/Portfolio.css';

const Portfolio = ({ data }) => (
  <div className={styles.container}>
    <Graph data={data} />
    <PortfolioData data={data} />
    <Analytics />
  </div>
);

export default Portfolio;
