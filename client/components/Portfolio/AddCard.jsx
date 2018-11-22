import React from 'react';
import Input from './TextInput';
import Select from './Select';
import getExchanges from '../../lib/exchange';
import styles from '../../styles/Portfolio/AddCard';

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      name: '',
      exchange: 'Select an Exchange',
      type: 'Select a Type',
      category: 'Select a Category',
      exchanges: [],
    };
    this.state = this.default;
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
    this.setState(this.default);
  }

  render() {
    const {
      name, exchange, exchanges, type, category,
    } = this.state;
    const types = ['Select a Type', 'Personal', 'Retirement', 'Education', 'Health'];
    const categories = ['Select a Category', 'Personal', 'Retirement', 'Other'];
    const selects = [
      { id: 'Exchange', value: exchange, options: exchanges },
      { id: 'Type', value: type, options: types },
      { id: 'Category', value: category, options: categories },
    ];

    return (
      <div className={styles.addContainer}>
        <h2 className={styles.header}>Add Portfolio</h2>
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
          <input
            type="submit"
            value="Add"
            className={styles.addButton}
          />
        </form>
      </div>
    );
  }
}

export default AddCard;
