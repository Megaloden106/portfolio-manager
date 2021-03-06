import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Summary from './Summary';
import styles from '../../../styles/Portfolio/Edit/Card';

const Card = ({ company, portfolios }) => {
  let updated = null;
  portfolios.forEach(({ lastUpdated }) => {
    const date = moment(lastUpdated);
    if (!updated || date > updated) updated = date;
  });
  const orderedList = portfolios.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className={styles.companyContainer}>
      <h2 className={styles.header}>
        {company}
        <span className={styles.lastUpdate}>
          Last Updated&nbsp;
          {updated.fromNow()}
        </span>
      </h2>
      {orderedList.map(portfolio => (
        <Summary
          key={portfolio.id}
          portfolio={portfolio}
        />
      ))}
    </div>
  );
};

export default Card;

Card.propTypes = {
  company: PropTypes.string.isRequired,
  portfolios: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};
