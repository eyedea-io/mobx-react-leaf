import React, { Component, PropTypes } from 'react';
import hoistStatics from 'hoist-non-react-statics';

export function configureStores(stores) {
  // Stores argument is a list of store classes
  // Map through each class and construct it.
  const compiledStores = Object
    .keys(stores)
    .reduce((result, storeName) => ({
      ...result,
      [storeName]: new stores[storeName],
    }), {});

  // Allow commponents to comunicate with each other via static 'stores' var.
  Object
    .keys(stores)
    .forEach(storeName => {
      compiledStores[storeName].stores = compiledStores;
    });

  return compiledStores;
}

export function connect(...mapStoresToProps) {
  return function wrapWithConnect(ComposedComponent) {
    class Connect extends Component {
      static propTypes = {
        store: PropTypes.object,
      }

      static contextTypes = {
        store: PropTypes.object,
      }

      constructor(props, context) {
        super(props, context);
        this.store = props.store || context.store;
      }

      render() {
        let filteredStores;

        // Handle: @connect(({ uiStore, userStore }) => ({}))
        if (typeof mapStoresToProps[0] === 'function') {
          filteredStores = mapStoresToProps[0](this.store);
        } else {
          // Handle: @connect('uiStore', 'userStore')
          filteredStores = Object.keys(this.store)
            .filter(key => mapStoresToProps.indexOf(key) >= 0)
            .reduce((obj, key) => ({
              ...obj,
              [key]: this.store[key],
            }), {});
        }

        return <ComposedComponent {...this.props} {...filteredStores} />;
      }
    }

    return hoistStatics(Connect, ComposedComponent);
  };
}
