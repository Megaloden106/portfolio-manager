import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { changeAddCard } from '../../actions/actionCreators';
import styles from '../../styles/Portfolio/Sidebar';

const Sidebar = ({ portfolioList, handleEditClick }) => (
  <nav className={styles.sidebarContainer}>
    <div className={styles.section}>
      Portfolios
      <div className={styles.edit}>
        <Link to="/portfolio/edit/" onClick={handleEditClick}>
          <img
            className={styles.icon}
            src="https://s3-us-west-1.amazonaws.com/portfolio-manager-project/edit.png"
            alt="Edit"
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
          <Link to={`/portfolio/${portfolio.id}/`}>
            {portfolio.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
});

const mapDispatchToProps = dispatch => ({
  handleEditClick: () => {
    if (!window.location.pathname.includes('edit')) {
      dispatch(changeAddCard(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

Sidebar.propTypes = {
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
