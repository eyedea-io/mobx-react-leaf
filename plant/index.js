// Global styles
import 'styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'nodes/App';

const $root = document.getElementById('plant');

render(<AppContainer children={<App />} />, $root);

if (module.hot) {
  module.hot.accept('nodes/App', () => {
    // Reloading doesn't work without this line
    require('nodes/App'); // eslint-disable-line
    render(<AppContainer children={<App />} />, $root);
  });
}
