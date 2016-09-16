import React from 'react';
import { Match, Miss } from 'react-router';

import Landing from './Landing';
import NotFound from './NotFound';

export default () => (
  <div>
    <Match pattern="/" exactly component={Landing} />
    <Miss component={NotFound} />
  </div>
);
