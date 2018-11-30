import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id,
  value,
  handleChange,
  styles,
}) => (
  <label htmlFor={id} className={styles.name}>
    {`${id}:`}
    <br />
    <input
      type="text"
      id={id}
      value={value}
      className={styles.text}
      onChange={handleChange}
    />
  </label>
);

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};
