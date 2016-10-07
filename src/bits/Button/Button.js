import React, { PropTypes } from 'react';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Button = ({
  children,
  modifiers = '',
  className = '',
  ...rest,
}) => (
  <button
    {...rest}
    className={cn('Btn',
      className.split(' '),
      modifiers.split(' ').map(str => `Btn--${str}`)
    )}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.string,
};

export default Button;
