import { Component, PropTypes, Children } from 'react';

export default class RootProvider extends Component {
  static propTypes = {
    root: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = {
    root: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.root = props.root;
  }

  getChildContext() {
    return { root: this.root };
  }

  render() {
    return Children.only(this.props.children);
  }
}
