import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../../containers/Portfolio/Content';
import Edit from '../../containers/Portfolio/Edit';
import Sidebar from '../../containers/Portfolio/Sidebar';
import Unauthorized from './Unauthorized';
import styles from '../../styles/Portfolio';

const Portfolio = () => (
  <div className={styles.portfolioContainer}>
    <Sidebar />
    <Switch>
      <Route exact path="/portfolio/edit" component={Edit} />
      <Route exact path="/portfolio/unauthorized" component={Unauthorized} />
      <Route path="/portfolio/:id" component={Content} />
    </Switch>
  </div>
);

export default Portfolio;
