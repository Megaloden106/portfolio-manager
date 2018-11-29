import React from 'react';
import PropTypes from 'prop-types';
import AddData from './AddData';
import styles from '../../../styles/Portfolio/Content';

class Content extends React.Component {
  componentDidMount() {
    const { match, handlePageLoad } = this.props;
    handlePageLoad(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match, handlePageLoad } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      handlePageLoad(match.params.id);
    }
  }

  render() {
    const { currentPortfolio, match, portfolioList } = this.props;
    const defaultPortfoliosIds = [];
    if (portfolioList.length > 0) {
      for (let i = 0; i < 3; i += 1) {
        defaultPortfoliosIds.push(portfolioList[i].id);
      }
    }
    return (
      <div className={styles.contentContainer}>
        {!defaultPortfoliosIds.includes(Number(match.params.id)) && <AddData />}
        <div className={styles.noDataContainer}>
          {currentPortfolio.length === 0 && (
            <div className={styles.border}>
              <h1 className={styles.text}>
                Please Add Portfolio Data
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content;

Content.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  currentPortfolio: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    deposit: PropTypes.string.isRequired,
    withdrawal: PropTypes.string.isRequired,
    returns: PropTypes.string.isRequired,
    cumulativeReturns: PropTypes.string.isRequired,
  })).isRequired,
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handlePageLoad: PropTypes.func.isRequired,
};
