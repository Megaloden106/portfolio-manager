import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeAddCard } from '../../../actions/actionCreators';
import { registerNewPortfolio } from '../../../actions/portfolio';
import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Add';

const AddCard = ({ handleSubmit, handleCancel }) => (
  <div className={styles.addContainer}>
    <h2 className={styles.header}>Add Portfolio</h2>
    <Form
      form="add"
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data, history) => dispatch(registerNewPortfolio(data, history)),
  handleCancel: () => dispatch(changeAddCard(false)),
});

export default connect(null, mapDispatchToProps)(AddCard);

AddCard.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
