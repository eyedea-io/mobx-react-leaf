import React, { PropTypes } from 'react';
import { Layout } from 'bytes';
import { connect } from 'utils';
import formize from './Landing.formize';

import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  store: { app: { helloMessage } },
  formize: { fields },
}) => (
  <Layout name="Default">
    <input {...fields.firsName} className={cn('Input', 'u-mv+')} />

    <p className="u-alpha">{`${helloMessage} ${fields.firsName.value}`}!</p>
  </Layout>
);

Landing.propTypes = {
  store: PropTypes.object.isRequired,
  formize: PropTypes.object.isRequired,
};

export default connect(Landing, { formize });
