import { configureNodes } from 'utils';

// Create object with basic routes that simply map path to node
const basicNodes = {
  '/': System.import('./Landing'),
  about: System.import('./About'),
  '*': System.import('./NotFound'),
};

// Here you can define custom routes that require additional setup
const advancedNodes = [];

export default {
  childRoutes: configureNodes(basicNodes, advancedNodes),
};
