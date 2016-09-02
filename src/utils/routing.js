const createRoute = (path, importComponent) => ({
  path,
  getComponent: (nextState, cb) => {
    importComponent.then(component => cb(null, component.default));
  },
});

export default function configureRoutes(basicRoutes, advancedRoutes = []) {
  return Object
    .keys(basicRoutes)
    .reduce((routes, path) =>
      routes.concat(createRoute(path, basicRoutes[path])),
      advancedRoutes
    );
}
