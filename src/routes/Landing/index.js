import React, { PropTypes } from 'react';
import { Layout } from 'bytes';
import { connect } from 'utils';

const Landing = ({
  store: { app: { helloMessage } },
}) => (
  <Layout name="Default">
    <p className="u-alpha">{helloMessage}!</p>
  </Layout>
);

Landing.propTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(Landing);
