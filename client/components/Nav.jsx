import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from './Nav.css';

const Nav = ({ portfolios }) => (
  <div className={styles.container}>
    {portfolios.map(portfolio => <Tab portfolio={portfolio} />)}
    <Tab />
  </div>
);

export default Nav;

Nav.propTypes = {
  portfolios: PropTypes.arrayOf.isRequired,
};
