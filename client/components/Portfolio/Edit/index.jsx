import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './Card';
import updateModalDisplay from '../../../actions/modal';
import styles from '../../../styles/Portfolio/Edit';

const Edit = ({ portfolioList, handleAddPortfolio }) => {
  const companyPortfolioList = {};
  for (let i = 3; i < portfolioList.length; i += 1) {
    const portfolio = portfolioList[i];
    const { exchange } = portfolio;
    companyPortfolioList[exchange] = (companyPortfolioList[exchange] || []).concat([portfolio]);
  }
  const companies = Object.keys(companyPortfolioList).sort((a, b) => a.localeCompare(b));
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.header}>
        Portfolios
        <input
          type="button"
          value="+ ADD PORTFOLIO"
          className={styles.addButton}
          onClick={handleAddPortfolio}
        />
      </h1>
      {portfolioList.length > 3 ? (
        companies.map(company => (
          <Card
            key={company}
            company={company}
            portfolios={companyPortfolioList[company]}
          />
        ))
      ) : (
        <div className={styles.noData}>
          <h1 className={styles.text}>
            Please Add a Portfolio
          </h1>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
});

const mapDispatchToProps = dispatch => ({
  handleAddPortfolio: () => dispatch(updateModalDisplay('', 'Add Portfolio')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

Edit.propTypes = {
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handleAddPortfolio: PropTypes.func.isRequired,
};
