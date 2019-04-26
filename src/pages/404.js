import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Terminal from '../components/Terminal';

function NotFoundPage({ location }) {
  const pathname = location.pathname.substring(1);
  return (
    <Layout>
      <SEO title="Not found!" />
      <Terminal
        input={`cat ${pathname}.json | jq`}
        output={`cat: ${pathname}.json: No such file or directory`}
      />
    </Layout>
  );
}

export default NotFoundPage;
