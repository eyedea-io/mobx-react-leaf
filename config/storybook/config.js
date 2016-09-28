import { configure } from '@kadira/storybook';

function loadStories() {
  return require('../../plant/leafs/stories'); // eslint-disable-line
}

configure(loadStories, module);
