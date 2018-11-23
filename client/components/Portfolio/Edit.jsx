import React from 'react';
import PropTypes from 'prop-types';
import AddCard from '../../containers/Portfolio/AddCard';
import styles from '../../styles/Portfolio/Edit';

const Edit = ({ addCard, handleAddPortfolioClick }) => (
  <div className={styles.registerContainer}>
    <h1 className={styles.header}>
      Portfolios
      <input
        type="button"
        value="+ ADD PORTFOLIO"
        className={styles.addButton}
        onClick={handleAddPortfolioClick}
      />
    </h1>
    {addCard && <AddCard />}
  </div>
);

export default Edit;

Edit.propTypes = {
  addCard: PropTypes.bool.isRequired,
  handleAddPortfolioClick: PropTypes.func.isRequired,
};
