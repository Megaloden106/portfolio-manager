import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeAddCard } from '../../../actions/actionCreators';
import { registerNewPortfolio } from '../../../actions/portfolio';
import PortfolioForm from '../../PortfolioForm';
import styles from '../../../styles/Portfolio/Edit/Add';

const AddCard = ({ handleCancel, handleSubmit }) => (
  <div className={styles.addContainer}>
    <h2 className={styles.header}>Add Portfolio</h2>
    <PortfolioForm
      form="add"
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleCancel: () => dispatch(changeAddCard(false)),
  handleSubmit: (data, history) => dispatch(registerNewPortfolio(data, history)),
});

export default connect(null, mapDispatchToProps)(AddCard);

AddCard.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
