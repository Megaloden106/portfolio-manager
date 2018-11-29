import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Summary from '../../../containers/Portfolio/Card/Summary';
import styles from '../../../styles/Portfolio/Card/Company';

const CompanyCard = ({ company, portfolios }) => {
  let updated = moment();
  portfolios.forEach(({ lastUpdated }) => {
    const date = moment(lastUpdated);
    if (date < updated) updated = date;
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
