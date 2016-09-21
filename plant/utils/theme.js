import React, { Component } from 'react';
import * as themes from 'themes';
import hoistStatics from 'hoist-non-react-statics';

export default (key) => ComposedComponent => {
  class ThemeComponent extends Component {
    render() {
      const Theme = themes[key];

      return (
        <Theme {...this.props}>
          <ComposedComponent {...this.props} />
        </Theme>
      );
    }
  }

  return hoistStatics(ThemeComponent, ComposedComponent);
};
