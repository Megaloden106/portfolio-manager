import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  id, options, styles, value, handleChange,
}) => (
  <label htmlFor={id}>
    {`${id}:`}
    <br />
    <select
      id={id}
      className={styles.select}
      onChange={handleChange}
      value={value}
    >
      {options.map(option => (
        <option
          value={option}
          key={option}
        >
          {option}
        </option>
      ))}
    </select>
    <br />
  </label>
);

export default Select;

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
