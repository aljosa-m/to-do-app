import React from 'react';
import '../styles/Button.css';

const Button = props => (
      <button className="Button" onClick={props.buttonAction}>{props.buttonLabel}</button>
);

export default Button;
