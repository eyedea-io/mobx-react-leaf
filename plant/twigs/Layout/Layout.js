import { PropTypes, createElement } from 'react';
import * as layouts from './index';

const Layout = ({ name, children }) => createElement(layouts[name], { children });

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Layout;
