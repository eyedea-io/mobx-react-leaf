import App from './App';
import { configureNodes } from 'utils';

// Create object with basic routes that simply map path to node
const basicNodes = {
  '/': System.import('./Landing'),
  '*': System.import('./NotFound'),
};

// Here you can define custom routes that require additional setup.
// Routing is based on react-router, so example entry would look like this:
//   {
//     path: 'contact',
//     component: About,
//     onEnter: () => {},
//   },
const advancedNodes = [];

export default {
  component: App,
  childRoutes: configureNodes(basicNodes, advancedNodes),
};
