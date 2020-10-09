import React from 'react';
import 'normalize.css';

import Layout from './src/components/layout';

import 'typeface-roboto-mono';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
