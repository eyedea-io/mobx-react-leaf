import React, { Component, PropTypes } from 'react';
import { connect, observer, theme } from 'utils';

@observer
@connect(({ userStore, uiStore }) => ({
  language: uiStore.language,
  setLanguage: uiStore.setLanguage,
  helloMessage: userStore.helloMessage,
}))
@theme('Default')
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
