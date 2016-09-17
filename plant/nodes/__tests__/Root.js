import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'nodes/Root';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
});
