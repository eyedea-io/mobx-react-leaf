import React, { Component, PropTypes } from 'react';
import { connect, observer } from 'utils';

export default class Landing extends Component {
  static propTypes = {
    language: PropTypes.string,
    setLanguage: PropTypes.func,
    helloMessage: PropTypes.string,
  }

  render() {
    const { helloMessage, setLanguage, language } = this.props;

    return (
      <div>
        <p>{helloMessage}</p>
        <button
          onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
        >Toggle language</button>
      </div>
    );
  }
}
