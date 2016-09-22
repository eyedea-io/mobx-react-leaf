import React, { PropTypes } from 'react';
import { connect } from 'utils';

const Landing = ({
  store: { app: { helloMessage } },
}) => (
  <div>
    <p className="u-alpha">{helloMessage}!</p>
  </div>
);

Landing.propTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(Landing, {
  theme: 'Default',
});
