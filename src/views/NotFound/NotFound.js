import React from 'react';
import styles from './styles.css';
import { Link } from 'bits';

const cn = require('classnames/bind').bind(styles);

export default () => (
  <div className={cn('NotFound')}>
    <div>
      <h1 className={cn('NotFound__title')}>Page was not found.</h1>
      <Link className={cn('NotFound__back')} to="/">Back to home</Link>
    </div>
  </div>
);
