import React, { PropTypes } from 'react';
import { connect } from 'utils';
import { Button, Link } from 'bits';
import { Wrapper } from 'bytes';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Header = ({
  store: { app: { language } },
  services: { app: { setLanguage } },
}) => (
  <div className={cn('Header')}>
    <Wrapper className={cn('Header__inner')}>
      <div className={cn('Header__logo')}>
        <a href="/" className={cn('Header__logo-link')}>Logo</a>
      </div>

      <ul className={cn('Header__nav', 'Nav')}>
        <li className={cn('Nav__item')}>
          <Link className={cn('Nav__item-link')} to="/">Home</Link>
        </li>
        <li className={cn('Nav__item')}>
          <Button
            className="Btn--primary"
            onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
          >Toggle language</Button>
        </li>
      </ul>
    </Wrapper>
  </div>
);

Header.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Header);
