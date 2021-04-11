import React from 'react';
import '../styles/Input.css';

const Input = props => (
  <input
    className='Input'
    onChange={value => props.onChange(value)}
    placeholder={props.placeholder}
    value={props.value}
  />
);

export default Input;
