import React, { PropTypes } from 'react';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

const Wrapper = ({ children, className }) => (
  <div className={cn('Wrapper', className)}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
