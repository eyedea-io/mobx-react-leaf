import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import nodes from './nodes';
import roots from './roots';
import { RootProvider } from './utils';

ReactDOM.render(
  <RootProvider root={roots}>
    <Router history={browserHistory} routes={nodes} />
  </RootProvider>,
  document.getElementById('plant')
);
