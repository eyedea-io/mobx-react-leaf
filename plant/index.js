// Global styles
import 'styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// Provider inserts store and services into context of childrens
import { Provider as Ground } from 'utils';
// App routing
import { BrowserRouter as Plant } from 'react-router';
// App routes
import Nodes from './nodes';
// Single source of data
import store from './store';
// Functions that operate on data in store
import services from './services';

ReactDOM.render(
  <Ground store={store} services={services}>
    <Plant>
      <Nodes />
    </Plant>
  </Ground>,
  document.getElementById('plant')
);
