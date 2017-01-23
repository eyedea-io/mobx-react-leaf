import React, { PropTypes } from 'react';
import { Redirect, Match } from 'react-router';
import { connect } from 'utils';

const MatchAsMember = ({
  redirectTo = '/auth/login',
  component: Component,
  store: { user: { isLoggedIn } },
  ...rest
}) => (
  <Match
    {...rest} render={props => (
    isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect
        to={{
          pathname: redirectTo,
          state: { from: props.location }
        }}
        />
    )
  )}
              />
);

MatchAsMember.propTypes = {
  pathname: PropTypes.string,
  component: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  location: PropTypes.object,
  redirectTo: PropTypes.string
};

export default connect(MatchAsMember);
