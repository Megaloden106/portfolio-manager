import React from 'react';
import { connect } from 'react-redux';
// import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/Portfolio/index';

const Sidebar = ({ porfolioList }) => (
  <nav className={styles.sidebarContainer}>
    <div className={styles.section}>Portfolios</div>
    <ul className={styles.list}>
      {porfolioList.map(portfolio => (
        <li
          key={portfolio.id}
          className={styles.item}
        >
          {portfolio.name}
        </li>
      ))}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  porfolioList: state.porfolioList,
});

export default connect(mapStateToProps)(Sidebar);

Sidebar.propTypes = {
  porfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};
