import 'styles/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router as Plant, browserHistory } from 'react-router';
import { Provider as Ground } from 'utils';
import nodes from 'nodes';
import store from './store';
import services from './services';

render(
  <Ground store={store} services={services}>
    <Plant history={browserHistory} routes={nodes} />
  </Ground>,
  document.getElementById('plant')
);
