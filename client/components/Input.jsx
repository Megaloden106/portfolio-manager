import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  form,
  formType,
  value,
  styles,
  handleChange,
}) => (
  <input
    type={form === 'Password' || form === 'Email' ? form : 'text'}
    id={form}
    value={value[form]}
    className={form.includes('Name') ? styles.name : styles.text}
    onChange={handleChange}
    placeholder={form}
    minLength={
      form.match(/P|U/) && formType === 'Signup' ? '5' : null
    }
    maxLength={
      form.match(/U/) && formType === 'Signup' ? '25' : null
    }
    required
  />
);

export default Input;

Input.propTypes = {
  form: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired,
  value: PropTypes.objectOf(PropTypes.string).isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
