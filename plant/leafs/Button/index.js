import React, { PropTypes } from 'react';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Button = ({ children, className, ...rest }) => (
  <button {...rest} className={cn('Btn', className)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
