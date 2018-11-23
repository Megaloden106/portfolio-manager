import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import styles from '../../styles/Portfolio/AddCard';

const AddCard = ({ handleAddPortfolioClick }) => (
  <div className={styles.addContainer}>
    <h2 className={styles.header}>Add Portfolio</h2>
    <Form handleAddPortfolioClick={handleAddPortfolioClick} />
  </div>
);

export default AddCard;

AddCard.propTypes = {
  handleAddPortfolioClick: PropTypes.func.isRequired,
};
