import React from 'react';
// import { Route, Switch, withRouter } from 'react-router-dom';
import Content from './Content';
import Sidebar from './Sidebar';
import styles from '../../styles/Portfolio';

const Portfolio = () => (
  <div className={styles.portfolioContainer}>
    <Sidebar />
    <Content />
  </div>
);

export default Portfolio;
