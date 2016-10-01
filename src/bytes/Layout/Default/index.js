import React, { PropTypes } from 'react';
import { Header, Wrapper } from 'bytes';

const Default = ({ children }) => (
  <div>
    <Header />
    <Wrapper className="u-pv">
      {children}
    </Wrapper>
  </div>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
