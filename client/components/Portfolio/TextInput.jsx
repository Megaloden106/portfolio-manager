import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id, styles, value, handleChange,
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
      required
    />
  </label>
);

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
