import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeAddCard } from '../../../actions/actionCreators';
import { registerNewPortfolio } from '../../../actions/portfolio';
import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Add';

const AddCard = ({ handleCancel, handleSubmit }) => (
  <div className={styles.addContainer}>
    <h2 className={styles.header}>Add Portfolio</h2>
    <Form
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
