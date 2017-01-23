// Global styles
import 'styles/styles.css'; // eslint-disable-line import/no-unassigned-import
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'views/App';

const $root = document.getElementById('root');

render((
  <AppContainer>
    <App/>
  </AppContainer>
), $root);

if (module.hot) {
  module.hot.accept('views/App', () => {
    // Reloading doesn't work without this line
    require('views/App'); // eslint-disable-line import/no-unassigned-import
    render((
      <AppContainer>
        <App/>
      </AppContainer>
    ), $root);
  });
}
