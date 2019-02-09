import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getExchanges } from '../service/portfolio';
import Select from './Select';

const PortfolioForm = ({
  form,
  prefill,
  styles,
  handleCancel,
  handleSubmit,
}) => {
  const [category, setCategory] = useState(prefill ? prefill.category : 'Select a Category');
  const [exchange, setExchange] = useState(prefill ? prefill.exchange : 'Select a Exchange');
  const [exchanges, setExchanges] = useState([]);
  const [name, setName] = useState(prefill ? prefill.name : '');
  const [type, setType] = useState(prefill ? prefill.type : 'Select a Type');

  useEffect(() => {
    getExchanges()
      .then(({ data }) => {
        setExchanges(['Select an Exchange'].concat(data.sort((a, b) => a.localeCompare(b))));
      }).catch(error => console.error(error));
  }, [prefill]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit({
      category,
      exchange,
      name,
      type,
    });
  };

  const categories = ['Select a Category'];
  if (type === 'Education' || type === 'Health') {
    categories.push('Personal', 'Retirement', 'Other');
  } else {
    categories.push(type);
  }
  const selects = [
    {
      id: 'Exchange',
      value: exchange,
      options: exchanges,
      change: e => setExchange(e.target.value),
    },
    {
      id: 'Type',
      value: type,
      options: ['Select a Type', 'Personal', 'Retirement', 'Education', 'Health'],
      change: e => setType(e.target.value),
    },
    {
      id: 'Category',
      value: category,
      options: categories,
      change: e => setCategory(e.target.value),
    },
  ];

  return (
    <form
      className={styles.form}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="Name" className={styles.name}>
        Name:
        <br />
        <input
          type="text"
          value={name}
          className={styles.text}
          onChange={e => setName(e.target.value)}
        />
      </label>
      {selects.map(({
        id,
        value,
        options,
        change,
      }) => (
        <Select
          key={id}
          id={id}
          options={options}
          value={value}
          handleChange={change}
          styles={styles}
        />
      ))}
      <div className={styles.button}>
        <input
          type="submit"
          value={form === 'add' ? 'Add' : 'Save'}
          className={styles.addButton}
          disabled={!name
            || exchange.includes('Select')
            || type.includes('Select')
            || category.includes('Select')
          }
        />
        <input
          type="button"
          value="Cancel"
          className={styles.cancelButton}
          onClick={handleCancel}
        />
      </div>
    </form>
  );
};

export default withRouter(PortfolioForm);

PortfolioForm.propTypes = {
  form: PropTypes.string.isRequired,
  prefill: PropTypes.shape({
    exchange: PropTypes.string,
    exchange_id: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

PortfolioForm.defaultProps = {
  prefill: null,
};
