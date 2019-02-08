import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editPortfolio } from '../../../actions/portfolio';
import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Summary';

const Summary = ({ portfolio, handleEdit, history }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleSubmit = (data) => {
    handleEdit(data, portfolio.id, history);
    setDropdown(false);
  };

  return (
    <div className={styles.summaryContainer}>
      <div
        className={styles.dropdownButton}
        onClick={() => setDropdown(!dropdown)}
        role="button"
        tabIndex="0"
        onKeyDown={() => {}}
      >
        <span className={styles.arrowhead}>
          {dropdown ? (<>&#709;</>) : (<>&#708;</>)}
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
            handleSubmit={handleSubmit}
            handleCancel={() => setDropdown(false)}
          />
        </div>
      )}
    </div>
  );
};

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
