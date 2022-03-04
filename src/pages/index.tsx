import React from 'react';
import 'evolux-ui-v2/dist/main.css';
import Loadable from '@loadable/component';

import Layout from '../components/layout';

const Text = Loadable(() => import('evolux-ui-v2'), {
  resolveComponent: (components) => components.Text,
});

const IndexPage = () => {
  return (
    <Layout title="Evolux Blog">
      <Text type="body" size="lg">
        Work in progress
      </Text>
    </Layout>
  );
};

export default IndexPage;
