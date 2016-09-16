// Global styles
import 'styles/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from 'nodes/Root';

const $root = document.getElementById('plant');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  $root
);

if (module.hot) {
  module.hot.accept('nodes/Root', () => {
    // Reloading doesn't work without this line
    require('nodes/Root'); // eslint-disable-line

    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      $root
    );
  });
}
