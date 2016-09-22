import React, { PropTypes } from 'react';
import { connect, MatchAsMember, MatchAsGuest } from 'utils';
import { Match, Miss } from 'react-router';

import Landing from './Landing';
import NotFound from './NotFound';

const Routes = () => (
  <div className="App">
    <Match pattern="/" exactly component={Landing} />
    <MatchAsMember pattern="/private" exactly component={Landing} redirectTo="/" />
    <MatchAsGuest pattern="/public" exactly component={Landing} />
    <Miss component={NotFound} />
  </div>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Routes);
