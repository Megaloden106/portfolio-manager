import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  id,
  options,
  value,
  handleChange,
  styles,
}) => (
  <label htmlFor={id} className={styles[id.toLowerCase()]}>
    {`${id}`}
    {id === 'Category' ? ' (Depends on Type):' : ':'}
    <br />
    <div className={styles.background}>
      <select
        id={id}
        className={styles.select}
        onChange={handleChange}
        value={value.includes('Select') ? '' : value}
      >
        {options.map(option => (
          <option
            disabled={option.includes('Select') ? 'disabled' : null}
            value={option.includes('Select') ? '' : option}
            key={option}
          >
            {option}
          </option>
        ))}
      </select>
      <h1 className={styles.arrowhead}>&#8964;</h1>
    </div>
  </label>
);

export default Select;

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};
