import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import { Provider } from 'utils';
// Single source of data
import store from 'store';
// Functions that operate on data in store
import * as services from 'services';
import 'styles/styles.css';

export default story => (
  <Provider store={store} services={services}>
    <Router>
      {story()}
    </Router>
  </Provider>
);
