const createRoute = (path, importComponent) => ({
  path,
  getComponent: (nextState, cb) => {
    importComponent.then(component => cb(null, component.default));
  },
});

const configureRoutes = (basicRoutes, advancedRoutes = []) => Object
  .keys(basicRoutes)
  .reduce((routes, path) =>
    routes.concat(createRoute(path, basicRoutes[path])),
    advancedRoutes
  );

export {
  configureRoutes,
};
