import React, { PropTypes } from 'react';
import styles from './styles.css';
import formize from './Landing.formize';
import { Layout } from 'bytes';
import { connect } from 'utils';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  store: { app: { helloMessage } },
  formize: { fields }
}) => (
  <Layout name="Default">
    <input {...fields.firsName} className={cn('Input', 'u-mv+')}/>

    <p className="u-alpha">{`${helloMessage} ${fields.firsName.value}`}!</p>
  </Layout>
);

Landing.propTypes = {
  store: PropTypes.object.isRequired,
  formize: PropTypes.object.isRequired
};

export default connect(Landing, { formize });
