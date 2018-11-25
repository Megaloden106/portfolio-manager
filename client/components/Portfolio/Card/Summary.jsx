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
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropdownToggle() {
    this.setState(prevState => ({ dropdown: !prevState.dropdown }));
  }

  handleSubmit(data) {
    const { portfolio, handleUpdate } = this.props;
    handleUpdate(data, portfolio.id);
    this.setState({ dropdown: false });
  }

  render() {
    const { portfolio } = this.props;
    const { dropdown } = this.state;
    return (
      <div className={styles.summaryContainer}>
        <div
          className={styles.dropdownButton}
          onClick={this.handleDropdownToggle}
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
              form="edit"
              prefill={portfolio}
              handleSubmit={this.handleSubmit}
              handleCancel={this.handleDropdownToggle}
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
  handleUpdate: PropTypes.func.isRequired,
};
