import React, { Component } from 'react';
import * as themes from 'themes';

export function theme(key) {
  return ComposedComponent =>
    class ThemeComponent extends Component {
      render() {
        const Theme = themes[key];

        return (
          <Theme {...this.props}>
            <ComposedComponent {...this.props} />
          </Theme>
        );
      }
    };
}
