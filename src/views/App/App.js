import React from 'react';
// App routing
import { BrowserRouter as Router } from 'react-router';
// Provider inserts store and services into context of childrens
import { Provider } from 'utils';
// App routes
import Routes from 'routes';
// Single source of data
import store from 'store';
// Functions that operate on data in store
import * as services from 'services';

export default () => (
  <Provider store={store} services={services}>
    <Router>
      <Routes/>
    </Router>
  </Provider>
);
