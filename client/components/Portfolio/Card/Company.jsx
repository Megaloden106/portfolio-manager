import React from 'react';
import PropTypes from 'prop-types';
// import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Company';

const CompanyCard = ({ company, handleShowClick, handleHideClick }) => (
  <div className={styles.companyContainer}>
    <h2 className={styles.header}>
      {company}
      <div className={styles.lastUpdate}>
        <span>Last Updated...</span>
      </div>
    </h2>
    {/* <Form
      handleShowClick={handleShowClick}
      handleHideClick={handleHideClick}
    /> */}
  </div>
);

export default CompanyCard;

CompanyCard.propTypes = {
  company: PropTypes.string.isRequired,
  handleShowClick: PropTypes.func.isRequired,
  handleHideClick: PropTypes.func.isRequired,
};
