// Global styles
import 'styles/styles.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'routes/App';

const $root = document.getElementById('root');

render(<AppContainer children={<App />} />, $root);

if (module.hot) {
  module.hot.accept('routes/App', () => {
    // Reloading doesn't work without this line
    require('routes/App'); // eslint-disable-line
    render(<AppContainer children={<App />} />, $root);
  });
}
