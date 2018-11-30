import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editPortfolio } from '../../../actions/portfolio';
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
    const { portfolio, handleEdit, history } = this.props;
    handleEdit(data, portfolio.id, history);
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

const mapDispatchToProps = dispatch => ({
  handleEdit: (data, id, history) => dispatch(editPortfolio(data, id, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(Summary));

Summary.propTypes = {
  portfolio: PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
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
  handleEdit: PropTypes.func.isRequired,
};
