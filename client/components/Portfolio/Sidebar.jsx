import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/Portfolio/Sidebar';

const Sidebar = ({ portfolioList }) => (
  <nav className={styles.sidebarContainer}>
    <div className={styles.section}>
      Portfolios
      <div className={styles.edit}>
        <Link to="/portfolio/edit/">
          <img
            className={styles.icon}
            src="https://s3-us-west-1.amazonaws.com/portfolio-manager-project/edit.png"
            alt="E"
          />
        </Link>
      </div>
    </div>
    <ul className={styles.list}>
      {portfolioList.map(portfolio => (
        <li
          key={portfolio.id}
          className={styles.item}
        >
          <Link to={`/portfolio/${portfolio.id}/`}>{portfolio.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
});

export default connect(mapStateToProps)(Sidebar);

Sidebar.propTypes = {
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
