import { configureRoutes } from 'utils';

// Create object with basic routes that simply map path to component
const basicRoutes = {
  '/': System.import('./Landing'),
  about: System.import('./About'),
};

// Here you can define custom routes that require additional setup
const advancedRoutes = [];

export default {
  childRoutes: configureRoutes(basicRoutes, advancedRoutes),
};
