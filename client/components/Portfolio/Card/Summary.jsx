import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Summary';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
  }

  handlePortfolioClick() {
    this.setState(prevState => ({ dropdown: !prevState.dropdown }));
  }

  render() {
    const { portfolio } = this.props;
    const { dropdown } = this.state;
    return (
      <div className={styles.summaryContainer}>
        <div
          className={styles.dropdownButton}
          onClick={this.handlePortfolioClick}
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
        >
          <span className={styles.arrowhead}>
            {!dropdown ? (<span>&#708;</span>) : (<span>&#709;</span>)}
          </span>
          <h4 className={styles.data}>
            {portfolio.name}
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            {portfolio.type}
            <span className={styles.balance}>{portfolio.balance}</span>
          </h4>
        </div>
        {dropdown && (
          <div className={styles.dropdownContainer}>
            <Form
              type="edit"
              handleAddClick={this.handlePortfolioClick}
              handleCancelClick={this.handlePortfolioClick}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Summary;

Summary.propTypes = {
  portfolio: PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
