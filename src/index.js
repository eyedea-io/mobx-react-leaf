import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './stores';
import { StoreProvider } from 'utils';

ReactDOM.render(
  <StoreProvider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </StoreProvider>,
  document.getElementById('root')
);
