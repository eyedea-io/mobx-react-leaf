import React, { Component, PropTypes } from 'react';

export default class Default extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <div>Header</div>
        {this.props.children}
        <div>Footer</div>
      </div>
    );
  }
}
