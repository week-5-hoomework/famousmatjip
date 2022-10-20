import React from 'react';
import Layout from '../component/write/Layout';
import Page from '../component/write/Page';
import counterSlice from '../store/modules/counterSlice';

function Write() {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}

export default Write;
