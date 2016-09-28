import React, { PropTypes } from 'react';
import * as layouts from './index';

const Layout = ({ name, children }) => {
  const CustomLayout = layouts[name];

  return (
    <CustomLayout children={children} />
  );
};

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Layout;
