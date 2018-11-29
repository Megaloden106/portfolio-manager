import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updatePortfolioData } from '../../../actions/portfolio';
import AddData from './AddData';
import styles from '../../../styles/Portfolio/Content';

class Content extends React.Component {
  componentDidMount() {
    const { match, handlePageLoad, history } = this.props;
    handlePageLoad(match.params.id, history);
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

const mapStateToProps = state => ({
  currentPortfolio: state.currentPortfolio,
  portfolioList: state.portfolioList,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handlePageLoad: (id, history) => dispatch(updatePortfolioData(id, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

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
  portfolioList: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handlePageLoad: PropTypes.func.isRequired,
};
