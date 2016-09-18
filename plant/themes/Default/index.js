import React, { PropTypes } from 'react';
import { Header, Wrapper } from 'twigs';

const Default = ({ children }) => (
  <div>
    <Header />
    <Wrapper className="pv">
      {children}
    </Wrapper>
  </div>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
