import React, { Component, PropTypes } from 'react';
import { observer } from 'utils';
import hoistStatics from 'hoist-non-react-statics';

export function connect(...mapRootsToProps) {
  return (ComposedComponent) => {
    @observer
    class Connect extends Component {
      static propTypes = {
        services: PropTypes.object,
        store: PropTypes.object,
      }

      static contextTypes = {
        services: PropTypes.object,
        store: PropTypes.object,
      }

      constructor(props, context) {
        super(props, context);
        this.services = props.services || context.services;
        this.store = props.store || context.store;
      }

      render() {
        let filteredRoots;

        // Handle: @connect(({ services, store }) => ({}))
        if (typeof mapRootsToProps[0] === 'function') {
          filteredRoots = mapRootsToProps[0]({
            services: this.services,
            store: this.store,
          });
        } else {
          // Handle: @connect('services', 'store')
          filteredRoots = Object.keys(this.context)
            .filter(key => mapRootsToProps.indexOf(key) >= 0)
            .reduce((obj, key) => ({
              ...obj,
              [key]: this.context[key],
            }), {});
        }

        return <ComposedComponent {...this.props} {...filteredRoots} />;
      }
    }

    return hoistStatics(Connect, ComposedComponent);
  };
}
