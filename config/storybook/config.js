import { configure } from '@kadira/storybook';

function loadStories() {
  return require('../../src/bits/stories'); // eslint-disable-line
}

configure(loadStories, module);
