import React, { Component, PropTypes } from 'react';
import { connect, observer, theme } from 'utils';
import { Button } from 'leafs';

@observer
@connect(({ userRoot, uiRoot }) => ({
  language: uiRoot.language,
  setLanguage: uiRoot.setLanguage,
  helloMessage: userRoot.helloMessage,
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
        <Button
          className="btn--primary"
          onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
        >Toggle language</Button>
      </div>
    );
  }
}
