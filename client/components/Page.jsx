import React from 'react';
import Graph from './Graph';
import PortfolioData from './PortfolioData';
import Analytics from './Analytics';
import styles from './Page.css';

const Page = () => (
  <div>
    <Graph />
    <PortfolioData />
    <Analytics />
  </div>
);

export default Page;
