import React from 'react';
import PropTypes from 'prop-types';
import Input from './TextInput';
import Select from './Select';
import getExchanges from '../../lib/exchange';
import styles from '../../styles/Portfolio/Form';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      exchange: 'Select an Exchange',
      type: 'Select a Type',
      category: 'Select a Category',
      exchanges: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getExchanges()
      .then(({ data }) => this.setState({
        exchanges: ['Select an Exchange'].concat(data),
      })).catch(error => console.error(error));
  }

  handleChange(event) {
    this.setState({ [event.target.id.toLowerCase()]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleAddPortfolioClick } = this.props;
    handleAddPortfolioClick();
  }

  render() {
    const {
      name, exchange, exchanges, type, category,
    } = this.state;
    const { handleAddPortfolioClick } = this.props;
    const types = ['Select a Type', 'Personal', 'Retirement', 'Education', 'Health'];
    const categories = ['Select a Category'];
    if (type === 'Personal') {
      categories.push('Personal');
    } else if (type === 'Retirement') {
      categories.push('Retirement');
    } else if (type === 'Education' || type === 'Health') {
      categories.push(...['Personal', 'Retirement', 'Other']);
    }
    const selects = [
      { id: 'Exchange', value: exchange, options: exchanges },
      { id: 'Type', value: type, options: types },
      { id: 'Category', value: category, options: categories },
    ];

    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <Input
          id="Name"
          styles={styles}
          value={name}
          handleChange={this.handleChange}
        />
        {selects.map(({ id, value, options }) => (
          <Select
            key={id}
            id={id}
            options={options}
            styles={styles}
            value={value}
            handleChange={this.handleChange}
          />
        ))}
        <div className={styles.button}>
          <input
            type="submit"
            value="Add"
            className={styles.addButton}
          />
          <input
            type="button"
            value="Cancel"
            className={styles.cancelButton}
            onClick={handleAddPortfolioClick}
          />
        </div>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  handleAddPortfolioClick: PropTypes.func.isRequired,
};
