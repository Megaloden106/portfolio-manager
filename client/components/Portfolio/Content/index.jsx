import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updatePortfolioData } from '../../../actions/portfolio';
import updateModalDisplay from '../../../actions/modal';
import styles from '../../../styles/Portfolio/Content';

const Content = ({
  currentPortfolio,
  portfolioList,
  handleAddBalance,
  handleAddPortfolio,
  handlePageLoad,
  history,
  match,
}) => {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    handlePageLoad(match.params.id, history);
  }, [match.params.id]);

  const toggleDropdown = () => {
    setDropdown(true);
    document.addEventListener('click', function close(event) {
      if (!document.getElementById('dropdown') || !document.getElementById('dropdown').contains(event.target)) {
        document.removeEventListener('click', close);
        setDropdown(false);
      }
    });
  };

  const portfolioIds = {};
  for (let i = 0; i < portfolioList.length; i += 1) {
    const data = {
      name: portfolioList[i].name,
      exchange: portfolioList[i].exchange,
      index: i,
    };
    portfolioIds[portfolioList[i].id] = data;
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.graphContainer}>
        {portfolioIds[match.params.id] && (
          <h1 className={styles.header}>
            {portfolioIds[match.params.id].exchange && `${portfolioIds[match.params.id].exchange} - `}
            {portfolioIds[match.params.id].name}
            {portfolioIds[match.params.id].index > 2 ? (
              <input
                type="button"
                value="+ ADD"
                className={styles.addButton}
                onClick={toggleDropdown}
              />
            ) : (
              <input
                type="button"
                value="+ ADD PORTFOLIO"
                className={styles.addButton}
                onClick={() => {
                  setDropdown(false);
                  handleAddPortfolio();
                }}
              />
            )}
            {dropdown && (
              <div
                className={styles.dropdownContainer}
                id="dropdown"
              >
                <div className={styles.dropdownHeader}>Add New</div>
                <input
                  type="button"
                  value="Portfolio"
                  className={styles.dropdownButton}
                  onClick={() => {
                    setDropdown(false);
                    handleAddPortfolio();
                  }}
                />
                <input
                  type="button"
                  value="Balance"
                  className={styles.dropdownButton}
                  onClick={() => {
                    setDropdown(false);
                    handleAddBalance();
                  }}
                />
              </div>
            )}
          </h1>
        )}
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
};

const mapStateToProps = state => ({
  currentPortfolio: state.currentPortfolio,
  portfolioList: state.portfolioList,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handlePageLoad: (id, history) => dispatch(updatePortfolioData(id, history)),
  handleAddBalance: () => dispatch(updateModalDisplay('', 'Balance')),
  handleAddPortfolio: () => dispatch(updateModalDisplay('', 'Portfolio')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

Content.propTypes = {
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
  handleAddBalance: PropTypes.func.isRequired,
  handleAddPortfolio: PropTypes.func.isRequired,
  handlePageLoad: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    listen: PropTypes.func.isRequired,
    location: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }),
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
