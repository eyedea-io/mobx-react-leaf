import React, { Component, PropTypes } from 'react';
import { connect, observer, theme } from 'utils';

@theme('Default')
@connect(({ store }) => ({
  helloMessage: store.app.helloMessage,
}))
@observer
export default class Landing extends Component {
  static propTypes = {
    helloMessage: PropTypes.string,
  }

  render() {
    const { helloMessage } = this.props;

    return (
      <div>
        <p>{helloMessage}!</p>
      </div>
    );
  }
}
