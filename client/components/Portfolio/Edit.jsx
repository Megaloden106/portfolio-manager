import React from 'react';
import PropTypes from 'prop-types';
import AddCard from '../../containers/Portfolio/AddCard';
import styles from '../../styles/Portfolio/Edit';

const Edit = ({ addCard, portfolioList, handleAddPortfolioClick }) => (
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
    {portfolioList.length > 3 ? (
      <div>Hello World</div>
    ) : (
      <div className={styles.noData}>
        <h1 className={styles.text}>
          Please Add A Portfolio
        </h1>
      </div>
    )}
  </div>
);

export default Edit;

Edit.propTypes = {
  addCard: PropTypes.bool.isRequired,
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handleAddPortfolioClick: PropTypes.func.isRequired,
};
