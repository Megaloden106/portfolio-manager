import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Portfolio/Content';

class Content extends React.Component {
  componentDidMount() {
    const { match, updatePortfolioData } = this.props;
    updatePortfolioData(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match, updatePortfolioData } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      updatePortfolioData(match.params.id);
    }
  }

  render() {
    const { currentPortfolio } = this.props;
    return (
      <div className={styles.contentContainer}>
        {currentPortfolio.length === 0 && (
          <div className={styles.noData}>
            <h1 className={styles.text}>
              Please Add Portfolio Data
            </h1>
          </div>
        )}
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
  updatePortfolioData: PropTypes.func.isRequired,
};
