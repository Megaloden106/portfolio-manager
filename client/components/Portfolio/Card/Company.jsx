import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import styles from '../../../styles/Portfolio/Card/Company';

const CompanyCard = ({ company, portfolios }) => (
  <div className={styles.companyContainer}>
    <h2 className={styles.header}>
      {company}
      <span className={styles.lastUpdate}>Last Updated...</span>
    </h2>
    {portfolios.map(portfolio => (
      <Summary
        key={portfolio.id}
        portfolio={portfolio}
      />
    ))}
  </div>
);

export default CompanyCard;

CompanyCard.propTypes = {
  company: PropTypes.string.isRequired,
  portfolios: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};
