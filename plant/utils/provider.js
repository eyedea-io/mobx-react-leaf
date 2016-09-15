import { Component, PropTypes, Children } from 'react';

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    services: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = {
    services: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    const { store, services } = this.props;

    this.roots = {
      store,
      services: Object
        .keys(services)
        .reduce((initializedServices, serviceName) => ({
          ...initializedServices,
          [serviceName]: new services[serviceName],
        }), {}),
    };

    Object
      .keys(services)
      .forEach(actionName => {
        this.roots.services[actionName].store = this.roots.store;
        this.roots.services[actionName].services = this.roots.services;
      });
  }

  getChildContext() {
    return {
      services: this.roots.services,
      store: this.roots.store,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
